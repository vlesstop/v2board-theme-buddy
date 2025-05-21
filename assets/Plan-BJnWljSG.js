// Helper functions likely from the build process (u, l, n) - left as is.
var u = Object.defineProperty;
var l = (t, e, r) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var n = (t, e, r) => (l(t, typeof e != "symbol" ? e + "" : e, r), r);

import { h as moment } from "./moment-BjLXg0w5.js";

/**
 * @class PlanService
 * @description Provides utility functions for handling plan-related data and display.
 */
const PlanService = class PlanService {
  /**
   * @static
   * @property {string[]} PLAN_CYCLE_KEYS - An array of keys representing different plan billing cycles.
   */
  // n(s,"List",["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"]);
  // This static property will be defined outside the class body using the helper 'n' below.

  /**
   * Gets the display name for a given plan cycle key.
   * @param {string} cycleKey - The key representing the plan cycle (e.g., "month_price").
   * @returns {string} The human-readable display name for the cycle.
   */
  getPlanCycleDisplayName(cycleKey) {
    switch (cycleKey) {
      case "month_price":
        return "月付";
      case "quarter_price":
        return "季付";
      case "half_year_price":
        return "半年";
      case "year_price":
        return "年付";
      case "two_year_price":
        return "兩年";
      case "three_year_price":
        return "三年";
      case "onetime_price":
        return "一次性";
      case "reset_price":
        return "重置流量包";
      default:
        return ""; // Or handle as an error/unknown case
    }
  }

  /**
   * Gets the details for a given order status code.
   * @param {number} statusCode - The status code of the order.
   * @returns {Array<number|string>} An array containing the status code, display name, and a type string (e.g., "warning", "success").
   */
  getOrderStatusDetails(statusCode) {
    switch (statusCode) {
      case 0:
        return [0, "待支付", "warning"];
      case 1:
        return [1, "開通中", "processing"];
      case 2:
        return [2, "已取消", "error"];
      case 3:
        return [3, "已完成", "success"];
      case 4:
        return [4, "已折抵", "success"];
      default:
        return [-1, "未知狀態", "default"]; // Or handle as an error/unknown case
    }
  }

  /**
   * Finds the first plan cycle key in PLAN_CYCLE_KEYS that exists and is not null in the provided plan data.
   * @param {object} planData - An object containing plan data, where keys might be plan cycle keys.
   * @returns {string|null} The first matching plan cycle key, or null if none is found.
   */
  getDefaultPlanCycleKey(planData) {
    if (!planData || typeof planData !== 'object') {
      return null;
    }
    for (const cycleKey of PlanService.PLAN_CYCLE_KEYS) {
      if (Object.keys(planData).includes(cycleKey) && planData[cycleKey] !== null) {
        return cycleKey;
      }
    }
    return null;
  }

  /**
   * Formats a Unix timestamp into a date string or returns a placeholder for special cases.
   * @static
   * @param {number|null} timestamp - The Unix timestamp (in seconds) or null.
   * @returns {string} Formatted date string "YYYY-MM-DD", "无限期" for null, or "尚未购买订阅" for 0.
   */
  static formatExpiryDate(timestamp) {
    switch (timestamp) {
      case null:
        return "無限期";
      case 0:
        return "尚未購買訂閱";
      default:
        return moment(timestamp * 1e3).format("YYYY-MM-DD");
    }
  }

  /**
   * Calculates the remaining days based on two timestamps.
   * Note: The original logic `r-1` was unclear. This implementation assumes `expiryTimestamp` and `currentTimestamp` are day numbers or similar.
   * If they are Unix timestamps, this logic will need significant adjustment.
   * Given the context of `Handel_Time_name` (formatExpiryDate), `e` (expiryTimestamp) is likely a Unix timestamp.
   * If `r` (currentTimestamp) is also a Unix timestamp, the difference should be calculated in days.
   * For now, interpreting `r-1` as `currentTimestamp - 1` (if `currentTimestamp` is number of days).
   * This method's logic is highly dependent on the actual meaning of `e` and `r`.
   * Assuming currentTimestamp is the number of days for the plan duration, and expiryTimestamp is not directly used if currentTimestamp is provided.
   * @static
   * @param {number|null} expiryTimestamp - The expiry timestamp (potentially null for "无限期").
   * @param {number|null} currentTimestamp - Interpreted as the number of days or a related value from the original `r`.
   * @returns {string|number} "无限期" if both are null, or `currentTimestamp - 1`. This needs clarification.
   */
  static calculateRemainingDays(expiryTimestamp, currentTimestamp) {
    // The original logic was: return e===null&&r===null?"无限期":r-1
    // This implies if either is not null, it returns r-1.
    // If e (expiryTimestamp) is a date and r (currentTimestamp) is total days of plan, the logic is mixed.
    // Let's assume if a plan is "无限期" (expiryTimestamp is null), and currentTimestamp is also null (or not applicable for "无限期" plans), then "無限期".
    // Otherwise, it uses currentTimestamp - 1. This is a direct translation but might not be meaningful without context for 'r'.
    if (expiryTimestamp === null && currentTimestamp === null) {
      return "無限期";
    }
    // If currentTimestamp is meant to be remaining days already, then `currentTimestamp -1` is odd.
    // If currentTimestamp is total plan duration in days, then `currentTimestamp - 1` is also odd.
    // Let's stick to the direct translation of the conditional logic for now.
    // If plan is not "无限期" (expiryTimestamp is not null), or if currentTimestamp has a value.
    if (currentTimestamp !== null) {
        return currentTimestamp - 1;
    }
    // Fallback or specific handling if currentTimestamp is null but expiryTimestamp is not.
    // This case was not explicitly covered by `e===null&&r===null` for the `r-1` part.
    // However, the original code would execute `r-1` if `e` was, for example, a timestamp and `r` was a number of days.
    // If currentTimestamp is null and expiryTimestamp is not, it means we have an expiry date but no "r" value.
    // This scenario should ideally not happen if 'r' is related to 'e'.
    // For safety, returning a specific value or error might be better.
    // Given the original simple structure, if currentTimestamp is null, `null - 1` is -1.
    return currentTimestamp === null ? "N/A" : currentTimestamp - 1;
  }

  /**
   * Renders an HTML string displaying plan features, marking supported features in green and others with a strikethrough.
   * @static
   * @param {string} featuresJsonString - A JSON string representing an array of feature objects. Each object should have `support` (boolean) and `feature` (string) properties.
   * @returns {string} An HTML string, or the original JSON string if parsing fails.
   */
  static renderPlanFeaturesHTML(featuresJsonString) {
    try {
      let featuresArray = JSON.parse(featuresJsonString);
      let htmlOutput = "";
      for (const featureItem of featuresArray) {
        if (featureItem.support) {
          htmlOutput += `<p class="p-1 text-green-500">${featureItem.feature}</p>`;
        } else {
          htmlOutput += `<p class="p-1 text-gray-500 line-through">${featureItem.feature}</p>`;
        }
      }
      return `
                      <div class="grid grid-cols-2 w-full gap-4 whitespace-nowrap overflow-x-scroll">
                      ${htmlOutput}
                       </div>
    `;
    } catch (error) {
      // console.error("Failed to parse features JSON:", error); // Optional: for debugging
      return featuresJsonString; // Return original string if parsing fails
    }
  }
};

// Assigning the static property using the helper 'n' as in the original code.
// var n=(t,e,r)=>(l(t,typeof e!="symbol"?e+"":e,r),r);
// n(s,"List",["month_price", ...]); translates to:
n(PlanService, "PLAN_CYCLE_KEYS", [
  "month_price",
  "quarter_price",
  "half_year_price",
  "year_price",
  "two_year_price",
  "three_year_price",
  "onetime_price",
  "reset_price"
]);

// The original export was: let i=s;export{i as P};
// This means 's' (now PlanService) was exported as 'P'.
export { PlanService as P };
