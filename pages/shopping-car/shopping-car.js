// pages/shopping-car/shopping-car.js
Page({


    /**
     * 页面的初始数据
     */
    data: {
        lastNum: 0,
        selectAllStatus: false,
        list:[]
    },
    onLoad: function (options) {
        var getCarData = wx.getStorageSync("shoppingCarList");
        this.setData({
            list: getCarData
        })
    },
    onShow: function () {
        var getCarData = wx.getStorageSync("shoppingCarList");
        this.setData({
            list: getCarData
        })
        console.log(this.data.list);
        this.getlastNum();
    },
    onAdd: function(event) {
        var dataset = event.currentTarget.dataset;
        var id = dataset.id;
        var num = this.data.list[id - 1].num;
        var price = this.data.list[id - 1].price;
        var showPrice = this.data.list[id - 1].showPrice;
        num++;
        showPrice = num * price;
        var obj = {
            ["list[" + (id - 1) + "].num"]: num,
            ["list[" + (id - 1) + "].showPrice"]: showPrice
        }
        this.setData(obj);
        this.getlastNum();
    },
    onSub: function(event) {
        var dataset = event.currentTarget.dataset;
        var id = dataset.id;
        var num = this.data.list[id - 1].num;
        var showPrice = this.data.list[id - 1].showPrice;
        var price = this.data.list[id - 1].price;
        if (num == 1) {
            return;
        } else {
            num--;
            var showPrice = num * price;
            var obj = {
                ["list[" + (id - 1) + "].num"]: num,
                ["list[" + (id - 1) + "].showPrice"]:showPrice
            }
            this.setData(obj);
            this.getlastNum();
        }
    },
    deleteList: function(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.list;
        carts.splice(index, 1);
        this.setData({
            list: carts
        });
        this.getlastNum();
    },
    selectList: function(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.list;
        const selected = carts[index].selected;
        carts[index].selected = !selected;
        this.setData({
            list: carts
        });
        this.getlastNum();
    },
    selectAll: function(e) {
        let selectAllStatus = this.data.selectAllStatus;
        selectAllStatus = !selectAllStatus;
        let carts = this.data.list;

        for (let i = 0; i < carts.length; i++) {
            carts[i].selected = selectAllStatus;
        }
        this.setData({
            selectAllStatus: selectAllStatus,
            list: carts
        });
        this.getlastNum(); // 重新获取总价
    },
    getlastNum: function() {
        wx.setStorageSync("shoppingCarList", this.data.list);
        var getCarData = this.data.list;
        var total = 0;
        for (var i = 0; i < getCarData.length; i++) {
            if (getCarData[i].selected) {
                total = total + getCarData[i].price * getCarData[i].num;
            }
            
        }
        this.setData({
            lastNum: total
        });
    },
    toPay: function() {
        wx: wx.navigateTo({
            url: '../toPay/toPay'
        })
    },
   
})