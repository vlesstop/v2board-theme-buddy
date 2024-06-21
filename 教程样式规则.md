# 教程文档样式使用指南

## 文字高亮主题色样式

````
<span aria-style="primary">Shadowrocket</span>
````
效果图如下:
![aba5f52b3ee1cd0ef35bf.png](https://img1.131213.xyz/file/aba5f52b3ee1cd0ef35bf.png)

## 色块提示信息样式

````
<p aria-status="warning">警告信息</p>
<p aria-status="error">错误信息</p>
<p aria-status="success">成功信息</p>
````
效果图如下:
![f71531384c3da598da698.png](https://img1.131213.xyz/file/f71531384c3da598da698.png)


## 步骤信息样式

````
<p aria-number="1">点击首页或者下方的 一键导入ClashX 按钮</p>
<p aria-number="2">浏览器确认框中勾选 始终允许 再点击打开</p>
<p aria-number="3">ClashX弹出窗口内点击 确认 </p>
````
效果图如下：
![e90a3cbc2da80026b675e.png](https://img1.131213.xyz/file/e90a3cbc2da80026b675e.png)

## 按钮样式

````
<div aria-label="buttonGroup">
    <span aria-label="button" data-url="https://www.baidu.com/">下载 ClashX 软件</span>
    <span aria-label="buttonSecondary" data-url="https://www.baidu.com/">备用下载链接</span>
</div>
````
* 如需并排显示，需要在 span 标签外层包裹 div 标签 + aria-label="buttonGroup"
* 如需单独显示，只需 span 标签 + aria-label="button" 即可

效果图如下：
![8469e5f0d4f9fea538c7b.png](https://img1.131213.xyz/file/8469e5f0d4f9fea538c7b.png)

## 标题样式

````
<h1>配置订阅</h1>
<h2>方式一: 自动导入</h2>
<h3>开启代理</h3>
````
* h1 标签为一级标题，自带左侧竖线，用于区分章节
* h2 标签为二级标题，用于区分章节内小节
* h3 标签为三级标题，用于区分小节内小节
* 没有设置 margin，需要自行设置

效果图如下：
![187ff0811b2622e28eae0.png](https://img1.131213.xyz/file/187ff0811b2622e28eae0.png)
![8dd4b0cc694f7b659806f.png](https://img1.131213.xyz/file/8dd4b0cc694f7b659806f.png)

## 图片样式

### 适用于针对 PC 客户端的操作引导图片展示
````
<div aria-label="img-pc">
    <img src="https://img1.131213.xyz/file/d86b5118ac2c90597a0ae.png" alt="网站首页">
    <img src="https://img1.131213.xyz/file/eb799cd390f3696aba750.png" alt="ClashX托盘操作引导">
    <img src="https://img1.131213.xyz/file/c1bbf9bf07811f7d5d0f9.png" alt="clashX弹窗点击添加">
    <img src="https://img1.131213.xyz/file/7573b36b12902c338527b.png" alt="clashX弹窗输入URL">
</div>
````
* 适用于 PC 客户端的操作引导图片，需要在 img 标签外层包裹 div 标签 + aria-label="img-pc"
* 在 PC 客户端中，每张图片高度都会控制在 360px，宽度会自适应，多图时会自动换行

效果图如下：
![f529ebd7ef29ae5db7728.png](https://img1.131213.xyz/file/f529ebd7ef29ae5db7728.png)

### 适用于针对移动端的操作引导图片展示
````
<div aria-label="img-scroll">
    <img src="https://img1.131213.xyz/file/402f76fb81bf96b2c4ef3.png" alt="AppStore 首页点击头像">
    <img src="https://img1.131213.xyz/file/6f5712c2d8e41ded83b68.png" alt="AppStore 个人页点击退出登录">
    <img src="https://img1.131213.xyz/file/94f251234c4b20064fd59.png" alt="AppStore 输入账号密码点击登录">
    <img src="https://img1.131213.xyz/file/6b399784f54610e593c83.png" alt="AppleID 安全页点击其它选项">
    <img src="https://img1.131213.xyz/file/a7d193e5c694feecff5f6.png" alt="AppleID 安全页点击不升级">
</div>
````
* 适用于移动端的操作引导图片，需要在 img 标签外层包裹 div 标签 + aria-label="img-scroll"
* 在移动端中，图片可以横向滚动查看，减少篇幅，提高阅读体验
* 多图时，图片会并排成一列，超出部分可以横向滚动查看

移动端效果图如下：
![38a41b49b6426e0a00bad.jpg](https://img1.131213.xyz/file/38a41b49b6426e0a00bad.jpg)

PC 端效果图如下：
![dde1f2e646d23849589c0.png](https://img1.131213.xyz/file/dde1f2e646d23849589c0.png)

### 普通图片展示
````
<div aria-label="img">
    <img src="https://img1.131213.xyz/file/fc467a7e018e1f2cd1407.png" alt="Diglink 首页">
    <img src="https://img1.131213.xyz/file/fc467a7e018e1f2cd1407.png" alt="Diglink 线路页">
    <img src="https://img1.131213.xyz/file/fc467a7e018e1f2cd1407.png" alt="Diglink 规则切换页">
</div>
````

## 特殊提醒样式

````
<div aria-alert>
    <span>推荐使用官方一键加速器</span>
    <a href="#/dashboard/knowledge/7" target="_blank">官方推荐 ｜ 一键加速器链接</a>
</div>
````

效果图如下：
![98818abd4105d3de85c27.png](https://img1.131213.xyz/file/98818abd4105d3de85c27.png)

## 特殊功能

### 复制订阅链接

````
<span aria-label="button" data-clipboard-text="{{subscribeUrl}}&flag=Shadowrocket&name={{siteName}}">复制订阅</span>
````


### ClashX 一键导入

````
<span aria-label="button" data-url="clash://install-config?url={{subscribeUrl}}&name={{siteName}}">一键导入ClashX</span>
````


### 下载按钮

````
<span aria-label="button" data-url="https://www.baidu.com/">下载可可加速器</span>
````
