// pages/goods-more/goods-more.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        carNum: 0,
        good: [],
        "bnrUrl": [{
            "url": "../../picture/奶粉.jpg"
        }, {
            "url": "../../picture/洗面奶.jpg"
        }, {
            "url": "../../picture/蜂蜜.jpg"
        }],
        list: [
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    toCar: function () {
        var carData = {
            num: 1,
            id: this.data.good.id,
            name: this.data.good.name,
            price: this.data.good.price,
            showPrice: this.data.good.showPrice,
            src: this.data.good.src
        };
        var shoppingCarList = wx.getStorageSync("shoppingCarList");
        if (shoppingCarList) {
            var isGoodList = true;
            for (var i = 0; i < shoppingCarList.length; i++) {
                if (shoppingCarList[i].id == this.data.good.id) {
                    shoppingCarList[i].num += 1;
                    isGoodList = false;
                }
            }
            if (isGoodList) {
                shoppingCarList.push(carData);
            }
            isGoodList = true;
            wx.setStorageSync("shoppingCarList", shoppingCarList)
        } else {
            wx.setStorageSync("shoppingCarList", [carData])
        }
        this.setData({
            carNum: wx.getStorageSync("shoppingCarList").length
        })

    },
    toPay:function(){
wx:wx.navigateTo({
    url: '../toPay/toPay',
})
    },
    onLoad: function (options) {
        var that = this;
        var arr = JSON.parse(options.arr);
        var lunbo = "bnrUrl[" + 0 + "].url";
        var pinpai = "list[" + 0 + "].right";
        var chandi = "list[" + 1 + "].right";
        var hanliang = "list[" + 2 + "].right";
        var baozhiqi = "list[" + 3 + "].right";
        var data = "list[" + 4 + "].right";
        var safe = "list[" + 5 + "].right";
        var fit = "list[" + 6 + "].right";
        that.setData({
            good: arr
        })
        that.setData({
            [lunbo]: arr.src
        })
        that.setData({
            [pinpai]: arr.pinpai
        })
        that.setData({
            [chandi]: arr.chandi
        })
        that.setData({
            [hanliang]: arr.hanliang
        })
        that.setData({
            [baozhiqi]: arr.baozhiqi
        })
        that.setData({
            [data]: arr.data
        })
        that.setData({
            [safe]: arr.safe
        })
        that.setData({
            [fit]: arr.fit
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        //修改购物车数量
        this.setData({
            carNum: wx.getStorageSync("shoppingCarList").length
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})