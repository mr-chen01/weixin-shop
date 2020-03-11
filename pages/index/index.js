//index.js
//获取应用实例
const app = getApp()
// var arr=JSON.stringify("goods")
Page({
    data: {
        "bnrUrl": [{
            "url": "../../picture/奶粉.jpg"
        }, {
            "url": "../../picture/洗面奶.jpg"
        }, {
            "url": "../../picture/蜂蜜.jpg"
        }],
        item: [{
                icon: '../../image/icon-qiandao.png',
                name: '签到'
            },
            {
                icon: '../../image/icon-fujin.png',
                name: '附近'
            },
            {
                icon: '../../image/icon-zhanhui.png',
                name: '游展'
            },
            {
                icon: '../../image/icon-fuli.png',
                name: '福利'
            },
            {
                icon: '../../image/icon-muma.png',
                name: '玩乐'
            },
            {
                icon: '../../image/icon-xingxing.png',
                name: '周边'
            },
            {
                icon: '../../image/icon-tiyu.png',
                name: '体育'
            },
            {
                icon: '../../image/icon-qinzi.png',
                name: '亲子'
            },
        ],
        goods: [{
                id: 1,
            pinpai: "NIDO\n",
            chandi: "新西兰\n",
            hanliang: "1kg\n",
            baozhiqi: "3-5个月\n",
            data: "2016/11/13\n",
            safe: "低温避光\n",
            fit: "适合3-5个月儿童\n",
                src: "../../picture/奶粉.jpg",
                name: "新西兰大牧场优鲜奶粉",
                showPrice: 199,
                oldPrice: 299,
                price: 199,
                num: 1,
                introduce: "为了宝宝的健康成长，为孩子选购一款健康的奶粉是我们作为父母的责任。但是随着市场的多样化，奶粉品牌鱼龙混杂，让人眼花缭乱，年轻的父母在购买奶粉时，往往拿不定主意。怎样才能给自己的宝宝选择适合的奶粉呢首先，成分要接近母乳。母乳中的蛋白质主要有乳清蛋白和酪蛋白两种，其中乳清蛋白进入胃中与胃液相互作用，凝固成鲜嫩而细小的颗粒状乳块，吸收效率更高。婴幼儿奶粉中最优的蛋白质比例应该接近母乳水平，恬爱奶粉有添加乳铁蛋白接近母乳，所以在选购其他品牌时要注意看营养成分。"
            

            },
            {
                id: 2,
                pinpai: "优质蜂蜜\n",
                chandi: "广西蜂场\n",
                hanliang: "500g\n",
                baozhiqi: "尽快食用\n",
                data: "2017/11/13\n",
                safe: "低温避光\n",
                fit: "蜂蜜过敏者慎用\n",
                showPrice: 99,
                num: 1,
                src: "../../picture/蜂蜜.jpg",
                src2: "../../picture/蜂蜜2.jpg",
                src3: "../../picture/蜂蜜3.jpg",
                name: "来自原生蜂场的优质蜂蜜",
                oldPrice: 199,
                price: 99,
                introduce:"蜜蜂从植物的花中采取含水量约为75%的花蜜或分泌物，存入自己第二个胃中，在体内多种转化的作用下，经过15天左右反复酝酿各种维生素、矿物质和氨基酸丰富到一定的数值时，同时把花蜜中的多糖转变成人体可直接吸收的单糖葡萄糖、果糖，水分含量少于23%存贮到巢洞中，用蜂蜡密封。蜂蜜是糖的过饱和溶液，低温时会产生结晶，生成结晶的是葡萄糖，不产生结晶的部分主要是果糖。"
            },
            {
                id: 3,
                pinpai: "曼秀雷敦\n",
                chandi: "上海宝洁\n",
                hanliang: "250g\n",
                baozhiqi: "1年\n",
                data: "2018/11/13\n",
                safe: "无\n",
                fit: "小心入眼\n",
                showPrice: 69.0,
                num: 1,
                src: "../../picture/洗面奶.jpg",
                src2: "../../picture/洗面奶2.jpg",
                src3: "../../picture/洗面奶3.jpg",
                name: "曼秀雷敦男士专用去油洗面奶",
                oldPrice: 369.0,
                price: 69.0,
                introduce:"洗面奶属于洁肤化妆品，其目的是清除皮肤上的污垢，使皮肤清爽，有助于保持皮肤正常生理状态。洗面奶清洗皮肤时，清洗的对象物（即基质）是人体皮肤，粘附在上面的污垢基本是皮脂和角质层碎片及其氧化分解物（污垢），或者是与之黏在一起的美容化妆品残留物。这些残留代谢产物是不稳定的，可与空气中的氧，或沉积分子反应。在暴露于阳光时或皮肤上有细菌存在，会发生各种物理化学和生物化学反应，形成一些可能伤害皮肤的物质。因而，即使是健康皮肤，皮肤清洁也是皮肤护理所必需的过程。"
            }

        ]
    },
    toGoodmore: function(e) {
        var index = e.currentTarget.dataset.index;
        var arr = JSON.stringify(this.data.goods[index]);
        wx: wx.navigateTo({
            url: '../goods-more/goods-more?arr=' + arr,
        })
    },
    toCar: function(e) {
        var index = e.currentTarget.dataset.index;
        wx: wx.switchTab({
            url: '../shopping-car/shopping-car',
        })
    },
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})