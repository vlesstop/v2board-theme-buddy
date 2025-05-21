window.config={
    logo: 'https://img2.imgtp.com/2024/03/11/YzU8iDJp.png', // 網站logo
    title:"AirBus", // 網站標題
    host:"https://user.r8s.top/", // 後端接口地址
    storeHome: {
        title: '選擇最適合你的訂閱計劃', // 套餐頁標題
        description: '若您已購買訂閱且當前未過期，再次購買相同套餐將在原過期時間上追加時長，購買其他套餐則對原有訂閱進行折抵' // 套餐頁描述
    },
    SignPage: {
        title: '覆蓋全球的高速網絡，您的高速旅程從 AirBus 開始', // 登錄頁標題
        desc1: 'High-speed network covering the whole world', // 登錄頁描述1
        desc2: 'Your high-speed journey starts with AirBus', // 登錄頁描述2
        inviteCodeEdit: false, // 是否允許用戶修改邀請碼
    },
    homeClient: {
        display: true, // 是否顯示客戶端下載教程卡片
        clients: [
            {
                key: 'windows',
                title: 'Windows客戶端',
                icon: 'ri:windows-fill',
                downloadLink: 'https://www.microsoft.com/zh-cn', // Windows客戶端下載地址
                knowledgeLink: '/dashboard/knowledge/10', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客戶端',
                icon: 'ri:finder-fill',
                downloadLink: 'https://www.apple.com/macos/sonoma/', // Mac客戶端下載地址
                knowledgeLink: '/dashboard/knowledge/8', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客戶端',
                icon: 'ri:android-fill',
                downloadLink: 'https://www.google.com/', // Android客戶端下載地址
                knowledgeLink: '/dashboard/knowledge/11', // 使用教程地址
            },
            {
                key: 'ios',
                title: 'iOS客戶端',
                icon: 'ri:apple-fill',
                downloadLink: 'https://www.apple.com/ios/ios-17/', // iOS客戶端下載地址
                knowledgeLink: '/dashboard/knowledge/12', // 使用教程地址
            },
            {
                key: 'knowledge',
                title: '查看其它教程',
                icon: 'ri:questionnaire-fill',
                downloadLink: null,
                knowledgeLink: '/dashboard/knowledge', // 使用教程地址
            }
        ],
    },
    homeBanner: {
        display: true, // 是否顯示首頁橫幅
        title: '邀請好友，共享優惠', // 首頁banner標題
        link: '/dashboard/invite', // 首頁banner鏈接，站內鏈接
        btnText: '立即邀請', // 首頁banner按鈕文字
        element: 'https://gd-hbimg.huaban.com/e68ceb12ffbd7dbeb698b3c5f4d2ed90185241be25183e-tShOmr_fw1200webp', // 首頁banner元素圖片
        bgImg: 'https://gd-hbimg.huaban.com/246ac6f06aeeab3b0c7e5908e7693b9a0e1b8a5249899-hB42f3_fw1200', // 首頁banner背景圖片
    }
}