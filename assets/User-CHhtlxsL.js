import { defineStore, ref } from "./index-trPnz5BS.js";
import { httpClient, fetchKnowledgeBaseAPI as fetchKnowledgeBaseArticlesAPI } from "./User-U_Q68dKX.js"; // Assuming w is fetchKnowledgeBaseAPI renamed to fetchKnowledgeBaseArticlesAPI
import "./parse-j8CtVGGo.js";

const fetchUserInfoAPI = () => httpClient({ url: "api/v1/user/info" });
const fetchUserNoticesAPI = () => httpClient({ url: "api/v1/user/notice/fetch" });
const fetchCommonConfigAPI = () => httpClient({ url: "api/v1/user/comm/config" });
const fetchUserSubscriptionAPI = () => httpClient({ url: "api/v1/user/getSubscribe" });
const fetchAllPlansAPI = () => httpClient({ url: "api/v1/user/plan/fetch" });
const fetchAllOrdersAPI = () => httpClient({ url: "api/v1/user/order/fetch" });

/**
 * Fetches details for a specific plan.
 * @param {string|number} planId - The ID of the plan to fetch.
 * @returns {Promise} A promise that resolves with the plan details.
 */
const fetchPlanDetails = planId => httpClient({ url: "api/v1/user/plan/fetch?id=" + planId });

/**
 * Checks the validity of a coupon.
 * @param {object} couponData - Data related to the coupon to check.
 * @returns {Promise} A promise that resolves with the coupon check result.
 */
const checkCoupon = couponData => httpClient({ url: "api/v1/user/coupon/check", method: "post", data: couponData });

/**
 * Saves a new order.
 * @param {object} orderData - The data for the order to be saved.
 * @returns {Promise} A promise that resolves with the save order result.
 */
const saveOrder = orderData => httpClient({ url: "api/v1/user/order/save", method: "post", data: orderData });

/**
 * Fetches the details of a specific order.
 * @param {string} tradeNo - The trade number of the order.
 * @returns {Promise} A promise that resolves with the order details.
 */
const fetchOrderDetail = tradeNo => httpClient({ url: "api/v1/user/order/detail?trade_no=" + tradeNo });

/**
 * Proceeds to checkout for an order.
 * @param {object} checkoutData - Data required for the checkout process.
 * @returns {Promise} A promise that resolves with the checkout result.
 */
const checkoutOrder = checkoutData => httpClient({ url: "api/v1/user/order/checkout", method: "post", data: checkoutData });

/**
 * Fetches available payment methods.
 * @returns {Promise} A promise that resolves with the list of payment methods.
 */
const fetchPaymentMethods = () => httpClient({ url: "api/v1/user/order/getPaymentMethod" });

/**
 * Cancels an order.
 * @param {object} orderData - Data of the order to be cancelled.
 * @returns {Promise} A promise that resolves with the cancellation result.
 */
const cancelOrder = orderData => httpClient({ url: "api/v1/user/order/cancel", method: "post", data: orderData });

/**
 * @store UserStore
 * @description Manages user-related state and actions, including user info, notices, configurations, subscriptions, orders, and knowledge base articles.
 */
const useUserStore = defineStore("User", () => {
  const showAirBuddyCopyright = ref(!1);
  showAirBuddyCopyright.value = !1; // Explicitly set if needed, though ref(false) initializes it to false.

  const userInfo = ref(),
    initUserInfo = () =>
      new Promise((resolve, reject) => {
        if (userInfo.value !== void 0) return resolve();
        fetchUserInfoAPI()
          .then(response => {
            userInfo.value = response.data;
            resolve();
          })
          .catch(() => reject());
      });

  const userNotices = ref(),
    initUserNotices = () =>
      new Promise((resolve, reject) => {
        if (userNotices.value !== void 0) return resolve();
        fetchUserNoticesAPI()
          .then(response => {
            userNotices.value = response;
            resolve();
          })
          .catch(() => reject());
      });

  const commonConfig = ref(),
    initCommonConfig = () =>
      new Promise((resolve, reject) => {
        if (commonConfig.value !== void 0) return resolve();
        fetchCommonConfigAPI()
          .then(response => {
            commonConfig.value = response.data;
            resolve();
          })
          .catch(() => reject());
      });

  const userSubscription = ref(),
    initUserSubscription = () =>
      new Promise((resolve, reject) => {
        if (userSubscription.value !== void 0) return resolve();
        fetchUserSubscriptionAPI()
          .then(response => {
            userSubscription.value = response.data;
            resolve();
          })
          .catch(() => reject());
      });

  /**
   * Initializes all essential user data by fetching user info, common config, notices, and subscription.
   * @returns {Promise<Array>} A promise that resolves when all data has been fetched.
   */
  function initializeUserData() {
    return Promise.all([initUserInfo(), initCommonConfig(), initUserNotices(), initUserSubscription()]);
  }

  const knowledgeBaseArticles = ref(),
    /**
     * Fetches knowledge base articles.
     * Uses the imported `fetchKnowledgeBaseArticlesAPI`.
     */
    fetchKnowledgeBase = () =>
      new Promise((resolve, reject) => {
        if (knowledgeBaseArticles.value !== void 0) return resolve(); // Check if already fetched
        fetchKnowledgeBaseArticlesAPI() // Use the renamed imported function
          .then(response => {
            knowledgeBaseArticles.value = response.data;
            resolve();
          })
          .catch(() => {
            reject();
          });
      });

  const planList = ref(),
    /**
     * Fetches the list of available plans.
     */
    fetchPlanList = () =>
      new Promise((resolve, reject) => {
        if (planList.value !== void 0) return resolve(); // Check if already fetched
        fetchAllPlansAPI()
          .then(response => {
            planList.value = response.data;
            resolve();
          })
          .catch(() => reject());
      });

  const userOrders = ref();
  /**
   * Fetches the list of user's orders.
   */
  const fetchUserOrders = () =>
    new Promise((resolve, reject) => {
      if (userOrders.value !== undefined && userOrders.value !== null) return resolve(); // Check if already fetched
      fetchAllOrdersAPI()
        .then(response => {
          userOrders.value = response.data;
          resolve();
        })
        .catch(() => reject());
    });

  return {
    AirBuddyCopyRight: showAirBuddyCopyright,
    Init: initializeUserData,
    Info: userInfo,
    Notice: userNotices,
    Config: commonConfig,
    Subscribe: userSubscription,
    Knowledge: knowledgeBaseArticles,
    Set_Knowledge: fetchKnowledgeBase,
    PlanList: planList,
    Set_PlanList: fetchPlanList,
    Order: userOrders,
    Set_Order: fetchUserOrders
  };
});

export {
  checkCoupon, // P
  saveOrder, // a
  fetchPlanDetails, // b
  cancelOrder, // c
  fetchOrderDetail, // d
  fetchPaymentMethods, // e
  checkoutOrder, // f
  useUserStore // u
};
