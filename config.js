window.config = {
  logo: "https://img.3331322.xyz/1737651838974.ico", // 网站logo
  title: "台安加速器", // 网站标题
  host: "https://tw.taisafe.xyz/", // 后端接口地址,请保证关闭了强制https，且host 地址未被墙
  storeHome: {
    title: "选择最适合你的订阅计划", // 套餐页标题
    description:
      "若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长，购买其他套餐则对原有订阅进行折抵", // 套餐页描述
  },
  SignPage: {
    title: "覆盖全球的高速网络，您的高速旅程从 台安加速器 开始", // 登录页标题
    desc1: "High-speed network covering the whole world", // 登录页描述1
    desc2: "Your high-speed journey starts with Taisafe", // 登录页描述2
    inviteCodeEdit: false, // 是否允许用户修改邀请码
  },
  homeClient: {
    display: true, // 是否显示客户端下载教程卡片
    clients: [
      {
        key: "ios",
        title: "iOS客户端",
        icon: "ri:apple-fill",
        downloadLink: "https://apps.apple.com/us/app/sing-box/id6451272673", // iOS客户端下载地址
        knowledgeLink: "/dashboard/knowledge/4", // 使用教程地址
      },
      {
        key: "windows",
        title: "Windows客户端（密碼：1234）",
        icon: "ri:windows-fill",
        downloadLink: "https://wwuc.lanzoup.com/iNhmU2ls4kqh", // Windows客户端下载地址
        knowledgeLink: "/dashboard/knowledge/3", // 使用教程地址
      },
      {
        key: "android",
        title: "Android客户端（密碼：1234）",
        icon: "ri:android-fill",
        downloadLink: "https://wwuc.lanzoup.com/irkaU2ls4mle", // Android客户端下载地址
        knowledgeLink: "/dashboard/knowledge/5", // 使用教程地址
      },
      {
        key: "mac",
        title: "Mac（M）客户端（密碼：1234）",
        icon: "ri:finder-fill",
        downloadLink: "https://wwuc.lanzoup.com/i3Hql2ls4vwj",
        knowledgeLink: "/dashboard/knowledge/6", // 使用教程地址
      },
      {
        key: "mac",
        title: "Mac（Intel）客户端（密碼：1234）",
        icon: "ri:finder-fill",
        downloadLink: "https://wwuc.lanzoup.com/iij0K2ls4umd", // Mac客户端下载地址
        knowledgeLink: "/dashboard/knowledge/6", // 使用教程地址
      },
    ],
  },
  homeBanner: {
    display: false, // 是否显示首页横幅
    title: "邀請好友，共享優惠", // 首页banner标题
    link: "/dashboard/invite", // 首页banner链接，站内链接
    btnText: "立刻邀請", // 首页banner按钮文字
    element:
      "https://gd-hbimg.huaban.com/e68ceb12ffbd7dbeb698b3c5f4d2ed90185241be25183e-tShOmr_fw1200webp", // 首页banner元素图片
    bgImg:
      "https://gd-hbimg.huaban.com/246ac6f06aeeab3b0c7e5908e7693b9a0e1b8a5249899-hB42f3_fw1200", // 首页banner背景图片
  },
  notice: {
    interval: 1, // 同一公告显示时间间隔，单位：天
    repeat: true, // 是否重复显示同一公告，false为只显示一次
    onlyHome: false, // 是否只在首页显示公告
  },
};
