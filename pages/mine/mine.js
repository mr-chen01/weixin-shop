// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:['我的收藏','我的订单','我的地址','联系客服','关于我们'],
      uesrInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      var that = this;
      wx.login({
          success(res){
              if(res.code){
                  wx.getUserInfo({
                      success(res){
                          console.log(res);
                          that.setData({
                              userInfo: res.userInfo
                          });
                      }
                  })
              }else{
                  return
              }
          }
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