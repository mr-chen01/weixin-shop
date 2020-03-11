// pages/activity/acticity.js
Page({

  data: {
    list: [{
        title: "限时折扣",
        message: [{
            src:"../../image/goods01.jpg",
            goodsName: "保健营养品1",
            newPrice: 95,
            oldPrice: 100,
            time: [1, 12]
          },
          {
            src:"../../image/goods01.jpg",
            goodsName: "保健营养品11",
            newPrice: 95,
            oldPrice: 100,
            time: [1, 12]
          },
          {
            src:"../../image/goods01.jpg",
            goodsName: "保健营养品111",
            newPrice: 95,
            oldPrice: 100,
            time: [1, 12]
          },
        ]
      },
      {
        title: "限时优惠",
        message: [{
          src:"../../image/goods02.jpg",
          goodsName: "保健营养品2",
          newPrice: 94,
          oldPrice: 101,
          time: [2,22]
        },
        {
          src:"../../image/goods02.jpg",
          goodsName: "保健营养品22",
          newPrice: 94,
          oldPrice: 101,
          time: [2,22]
        },
        {
          src:"../../image/goods02.jpg",
          goodsName: "保健营养品222",
          newPrice: 94,
          oldPrice: 101,
          time: [2,22]
        },

        ]


      }


    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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


  onUnload: function() {

  }
})