// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    currentOpacity: 0,
    number: 10,
    timeID: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.xunhuan()
  },

  xunhuan: function () {
    var that = this
    this.data.timeID = setTimeout(function() {
      that.dayin()
    }, 1000)
    console.log('num = ' + this.data.timeID)
  },

  dayin: function () {
    console.log(this.data.number)
    this.data.number--
    if (this.data.number >= 0) {
      this.xunhuan()
    } else {
      console.log('循环结束')
    }
    
  },

  onPageScroll: function (e) {
    console.log(e)
    this.setData({
      currentOpacity: e.scrollTop / 128
    })
    clearTimeout(this.data.timeID)
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