// Build process helpers - leave as is
var $ = Object.defineProperty;
var C = (o, t, s) => t in o ? $(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var c = (o, t, s) => (C(o, typeof t != "symbol" ? t + "" : t, s), s);

// Vue and Utility Imports
import {
  P as PlanService // Renamed from p
} from "./Plan-BJnWljSG.js";
import {
  ac as useVModel,    // Renamed from P (ac)
  b as onMounted,      // Renamed from k (b)
  D as openBlock,      // d
  E as createBlock,    // _
  F as createElementVNode, // e
  H as toDisplayString,  // i
  G as resolveComponent, // x (Can also be createStaticVNode or similar depending on context)
  J as Fragment,       // b
  K as renderList,     // T
  I as normalizeClass, // N
  B as useRouterVue,   // B - Original was B, could be useRouter or another Vue internal. Renaming to avoid conflict with M.
  r as ref,            // h
  g as createVNode,    // v
  O as withCtx,        // H
  Q as createTextVNode,// F
  R as notificationService, // L - Assuming Ant Design's message or similar
  A as useRoute,       // S
  ad as useRouter,     // M - Primary router instance for navigation
  S as createBlockVue, // R - Original was S, could be createBlock or related Vue internal.
                       // My previous version had R as defineComponent, which was an error in mapping.
                       // Based on original (d(), R(u, ...)) it's likely a block creation fn.
} from "./index-trPnz5BS.js";

// Store and API Imports
import {
  u as useUserStore,
  P as checkCoupon,
  a as saveOrder,
  b as fetchPlanDetails
} from "./User-CHhtlxsL.js";

// Component Imports
import { _ as InputSearchComponent } from "./index-BYqP-HDu.js"; // E
import { B as ButtonComponent } from "./index-Dj6s8LTA.js";   // O
import { S as SkeletonComponent } from "./Skeleton-DRQ7pli2.js"; // V

// Other imports (CSS, etc.)
import "./index-DtZ8MySn.js";
import "./moment-BjLXg0w5.js"; // Used by PlanService
import "./User-U_Q68dKX.js";   // Used by User-CHhtlxsL.js
import "./parse-j8CtVGGo.js";   // Used by User-CHhtlxsL.js
import "./omit-Ddy602VB.js";
import "./vnode-BYyB1UDk.js";
import "./index-F5vFXRx9.js";
import "./ResizeObserver.es-B1PUzC5B.js";

// Constants for PlanCycleSelectionPanel template
const planCyclePanelWrapper = { class: "w-full rounded-xl p-5 bg-white flex-1", style: { "box-shadow": "var(--shadow)" } };
const planCyclePanelTitle = { class: "text-xl font-black" };
const planCyclePanelContentHTML = ["innerHTML"]; // For v-html directive
const paymentCycleSectionWrapper = { class: "mt-5 rounded-xl p-5 bg-white", style: { "box-shadow": "var(--shadow)" } };
const paymentCycleTitle = createElementVNode("p", { class: "text-md font-black" }, "付款週期", -1);
const paymentCycleOptionsWrapper = { class: "flex lg:flex-wrap lg:flex-row flex-col text-sm font-black text-[var(--text-gray)] gap-5 items-center mt-5" };
const paymentCycleOptionEvents = ["onClick"];

/**
 * @component PlanCycleSelectionPanel
 * @description Left panel for selecting plan payment cycle and viewing plan features.
 */
const PlanCycleSelectionPanel = { // Original: W
  __name: "LeftPanel",
  props: {
    planDataModel: { type: Object, required: true }
  },
  emits: ["update:planDataModel"],
  setup(props, { emit }) { // o
    const planData = useVModel(props, "planDataModel", emit); // t = P(o,"P")

    onMounted(() => { // k
      if (planData.value && planData.value.planInfo) { // Check planInfo which is the new 'data'
        planData.value.selectedCycle = PlanService.prototype.getDefaultPlanCycleKey(planData.value.planInfo); // Type = Handel_One(data)
      }
      // generateCycleOptions() is reactive / called in template
    });

    /**
     * Generates payment cycle options based on plan data.
     * @returns {Array<Object>} Array of cycle options.
     */
    const generateCycleOptions = () => { // s
      let options = []; // r
      if (!planData.value || !planData.value.planInfo) return options;

      PlanService.PLAN_CYCLE_KEYS.forEach(cycleKey => { // p.List, a
        if (planData.value.planInfo[cycleKey]) { // data[a]
          options.push({
            type: cycleKey, // a
            money: (planData.value.planInfo[cycleKey] / 100).toFixed(2), // data[a]
            title: PlanService.prototype.getPlanCycleDisplayName(cycleKey) // p.prototype.Handel_name(a)
          });
        }
      });
      return options;
    };

    return (ctx, cache) => { // r, a
      var currentPlanData, planContent; // u, l
      return openBlock(), createBlock(Fragment, null, [ // d(), _(b, ...)
        createElementVNode("div", planCyclePanelWrapper, [ // e(...)
          createElementVNode("p", planCyclePanelTitle, toDisplayString((currentPlanData = planData.value.planInfo) == null ? void 0 : currentPlanData.name), 1), // e(p,A,i(...))
          createElementVNode("div", {
            class: "html mt-3",
            innerHTML: PlanService.renderPlanFeaturesHTML((planContent = planData.value.planInfo) == null ? void 0 : planContent.content) // x(p).Handel_Plan
          }, null, 8, planCyclePanelContentHTML)
        ]),
        createElementVNode("div", paymentCycleSectionWrapper, [
          paymentCycleTitle, // K
          createElementVNode("div", paymentCycleOptionsWrapper, [ // Q
            (openBlock(true), createBlock(Fragment, null, renderList(generateCycleOptions(), option => { // d(!0), _(b, null, T(s(), n => ...))
              return openBlock(), createBlock("p", { // d(), _("p", ...)
                class: normalizeClass([option.type === planData.value.selectedCycle ? "border-[var(--bg)] text-[var(--bg)]" : "", "lg:px-14 lg:w-auto w-full text-center cursor-pointer rounded-lg border py-2"]), // N(...) type === Type
                onClick: () => planData.value.selectedCycle = option.type // onClick: f=>t.value.Type=n.type
              }, toDisplayString(option.title), 11, paymentCycleOptionEvents); // i(n.title), q
            }), 256))
          ])
        ])
      ], 64);
    }
  }
};

// Constants for OrderSummaryPanel template
const orderSummaryPanelWrapper = { class: "bg-white p-5 mb-5 lg:mb-0 rounded-xl h-[100%]", style: { "box-shadow": "var(--shadow)" } };
const orderSummaryTitle = createElementVNode("p", { class: "font-black" }, "訂單詳情", -1);
const orderDetailsSection = { class: "mt-4" };
const orderTotalLabel = createElementVNode("p", { class: "text-[12px] font-black text-[var(--text-gray)]" }, "訂單總額", -1);
const orderTotalValues = { class: "flex gap-2 font-black justify-between mt-2" };
const orderTotalCurrency = { class: "text-[var(--text-gray)]" };
const trafficLabel = createElementVNode("p", { class: "text-[12px] mt-5 font-black text-[var(--text-gray)]" }, "套餐流量", -1);
const trafficValueStyle = { class: "font-black text-[var(--text-gray)] mt-2" }; // Renamed from ot to avoid conflict with type
const discountAmountSection = createElementVNode("div", { class: "mt-5 flex justify-between" }, [createElementVNode("p", { class: "text-[12px] font-black text-[var(--text-gray)]" }, "折扣金額")], -1);
const couponSection = { class: "flex flex-col mt-5 justify-between" };
const deductionSection = { class: "mt-5" };
const deductionLabel = createElementVNode("p", { class: "text-[12px] font-black text-[var(--text-gray)]" }, "抵扣金額", -1);
const deductionValueStyle = { class: "mt-2 font-black text-[var(--text-gray)]" }; // Renamed from ut
const hrElement = createElementVNode("hr", { class: "mt-5" }, null, -1);
const paymentTotalSection = { class: "mt-5 flex text-lg justify-between items-center" };
const paymentTotalLabel = createElementVNode("p", null, "支付總計", -1);
const paymentTotalValueStyle = { class: "font-black text-xl" }; // Renamed from _t

/**
 * @component OrderSummaryPanel
 * @description Right panel for displaying order summary, applying coupons, and proceeding to checkout.
 */
const OrderSummaryPanel = { // Original: vt
  __name: "RightPanel",
  props: {
    orderDataModel: { type: Object, required: true }
  },
  emits: ["update:orderDataModel"],
  setup(props, { emit }) { // o
    const orderData = useVModel(props, "orderDataModel", emit); // t = P(o,"P")
    const router = useRouterVue(); // s = B() - Assuming B is a router instance, distinct from M if M is main navigation
    const userStore = useUserStore(); // r = U()

    const couponState = ref({ // a = h(...)
      code: "",
      apply() { // ok()
        checkCoupon({ plan_id: orderData.value.planInfo.id, code: this.code }) // j({plan_id: t.value.data.id, code: this.value})
          .then(response => { // l
            orderData.value.applyCoupon(response.data); // t.value.Handel_Coupon(l.data)
            orderData.value.couponCode = this.code; // t.value.Coupon = this.value
          }).catch(error => {
            notificationService.error(error.message || "優惠券無效");
          });
      }
    });

    const checkoutState = ref({ // u = h(...)
      isLoading: false,
      async submitOrder() { // submit()
        this.isLoading = true;
        try {
          // Original: setTimeout(async()=>{...}, 100) - removed timeout for direct async
          const orderResult = await orderData.value.createOrder(); // l = await t.value.BuyNow()
          notificationService.success("訂單創建成功"); // L.success
          this.isLoading = false;
          await router.push({ name: "CheckOut", params: { id: orderResult.data } }); // s.push
        } catch (error) {
          notificationService.error(error.message || "訂單創建失敗");
          this.isLoading = false;
        }
      }
    });

    return (ctx, cache) => { // l, n
      var planInfo, configData; // g, y
      const AntInputSearch = InputSearchComponent; // f = E
      const AntButton = ButtonComponent; // w = O

      return openBlock(), createBlock("div", orderSummaryPanelWrapper, [ // d(), _("div", X, ...)
        orderSummaryTitle, // Y
        createElementVNode("div", orderDetailsSection, [ // Z
          orderTotalLabel, // tt
          createElementVNode("div", orderTotalValues, [ // et
            createElementVNode("p", null, toDisplayString((planInfo = orderData.value.planInfo) == null ? void 0 : planInfo.name) + " x " + toDisplayString(PlanService.prototype.getPlanCycleDisplayName(orderData.value.selectedCycle)), 1), // i((g=t.value.data)...) + x(p).prototype.Handel_name(t.value.Type)
            createElementVNode("p", orderTotalCurrency, toDisplayString((configData = userStore.Config) == null ? void 0 : configData.currency_symbol) + toDisplayString((orderData.value.planInfo[orderData.value.selectedCycle] / 100).toFixed(2)), 1) // i((y=x(r).Config)...)
          ])
        ]),
        trafficLabel, // st
        createElementVNode("p", trafficValueStyle, toDisplayString(orderData.value.planInfo.transfer_enable) + " GB", 1), // ot
        discountAmountSection, // lt
        createElementVNode("div", couponSection, [ // nt
          createVNode(AntInputSearch, { // v(f, ...)
            value: couponState.value.code, // a.value.value
            "onUpdate:value": cache[0] || (cache[0] = val => couponState.value.code = val),
            "enter-button": "驗證",
            placeholder: "請輸入優惠券",
            size: "middle",
            onSearch: cache[1] || (cache[1] = () => couponState.value.apply()) // onSearch: m=>a.value.ok()
          }, null, 8, ["value"])
        ]),
        createElementVNode("div", deductionSection, [ // rt
          deductionLabel, // it
          createElementVNode("p", deductionValueStyle, "¥" + toDisplayString(orderData.value.discountAmount.toFixed(2)), 1) // ut, t.value.Number
        ]),
        hrElement, // dt
        createElementVNode("div", paymentTotalSection, [ // ct
          paymentTotalLabel, // pt
          createElementVNode("p", paymentTotalValueStyle, "¥" + toDisplayString((orderData.value.planInfo[orderData.value.selectedCycle] / 100 - orderData.value.discountAmount).toFixed(2)), 1) // _t, t.value.data[t.value.Type] / 100 - t.value.Number
        ]),
        createVNode(AntButton, { // v(w, ...)
          loading: checkoutState.value.isLoading, // u.value.loading
          block: "",
          class: "mt-5",
          size: "large",
          type: "primary",
          onClick: cache[2] || (cache[2] = () => checkoutState.value.submitOrder()) // onClick: m=>u.value.submit()
        }, {
          default: withCtx(() => [createTextVNode("立即購買")]), // H(()=>[F(...)])
          _: 1
        }, 8, ["loading"])
      ]);
    }
  }
};

/**
 * @class OrderDetails
 * @description Holds and manages order details, including coupon application and order creation.
 */
class OrderDetails { // mt
  constructor() {
    c(this, "planInfo", null); // data
    c(this, "couponCode", ""); // Coupon
    c(this, "selectedCycle", ""); // Type
    c(this, "discountAmount", 0); // Number
  }

  /**
   * Applies coupon data to the order.
   * @param {object} couponData - The coupon data from the API.
   */
  applyCoupon(couponData) { // Handel_Coupon(t)
    if (!this.planInfo || !this.selectedCycle) return;
    if (couponData.type === 1) { // Fixed discount
      this.discountAmount = couponData.value / 100;
    } else { // Percentage discount
      this.discountAmount = (this.planInfo[this.selectedCycle] / 100) * (couponData.value / 100);
    }
  }

  /**
   * Creates an order by calling the saveOrder API.
   * @returns {Promise} API response from saveOrder.
   */
  createOrder() { // BuyNow()
    if (!this.planInfo) throw new Error("Plan information is missing.");
    return saveOrder({
      period: this.selectedCycle,
      plan_id: this.planInfo.id,
      coupon_code: this.couponCode
    });
  }
}

// Constants for CheckoutLayout template
const layoutWrapperDiv = { key: 0, class: "lg:flex gap-5" }; // xt
const leftPanelDiv = { class: "lg:w-[65%] flex flex-col" }; // ht
const rightPanelDiv = { class: "lg:flex-1" }; // ft

/**
 * @component CheckoutLayout
 * @description Main layout component for the checkout page.
 */
const CheckoutLayout = { // Mt
  __name: "Layout",
  setup() { // o
    const orderDetails = ref(new OrderDetails()); // t = h(new mt)
    const route = useRoute(); // s = S()
    const router = useRouter(); // M (useRouter from vue-router for navigation)

    onMounted(async () => { // k
      try {
        const plan = await fetchPlanDetails(route.params.id); // D(s.params.id)
        orderDetails.value.planInfo = plan.data; // t.value.data = r.data
        // Set initial selectedCycle if not set by PlanCycleSelectionPanel,
        // though PlanCycleSelectionPanel should handle this via its onMounted and v-model.
        if (plan.data && !orderDetails.value.selectedCycle) {
             orderDetails.value.selectedCycle = PlanService.prototype.getDefaultPlanCycleKey(plan.data);
        }
      } catch (error) {
        notificationService.error("無法加載套餐詳情，將返回首頁。");
        router.push("/dashboard"); // M.push(...) - Original was M.push, assuming M is the primary router
      }
    });

    return (ctx, cache) => { // r, a
      const SkeletonComp = SkeletonComponent; // u = V
      // createBlockVue was R (originally S from index-trPnz5BS.js)
      // if S was defineComponent, this is not used for rendering.
      // if S was createBlock, then it's createBlockVue.
      // The original was (d(), R(u, ...)) so R was a render function.
      // Assuming createBlockVue (my R) is the correct mapping for original S.
      return orderDetails.value.planInfo ? (
        openBlock(), createBlock("div", layoutWrapperDiv, [ // d(), _("div", xt, ...)
          createElementVNode("div", leftPanelDiv, [ // e("div", ht, ...)
            createVNode(PlanCycleSelectionPanel, { // v(W, ...)
              planDataModel: orderDetails.value, // P:t.value
              "onUpdate:planDataModel": cache[0] || (cache[0] = val => orderDetails.value = val)
            }, null, 8, ["planDataModel"])
          ]),
          createElementVNode("div", rightPanelDiv, [ // e("div", ft, ...)
            createVNode(OrderSummaryPanel, { // v(vt, ...)
              orderDataModel: orderDetails.value, // P:t.value
              "onUpdate:orderDataModel": cache[1] || (cache[1] = val => orderDetails.value = val)
            }, null, 8, ["orderDataModel"])
          ])
        ])
      ) : (openBlock(), createBlockVue(SkeletonComp, { key: 1, active: "", avatar: "" })); // d(), R(u, ...)
    }
  }
};

export { CheckoutLayout as default }; // Mt as default
