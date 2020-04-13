let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    description: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.productID)
    this.requestInfo(options.productID)
  },

  requestInfo: function(productID) {
    let data = {
      Method: 'GetProductDetail',
      ProductID: productID
    }
    let that = this
    app.GET(app.getUrl('Handler.ashx'), data, res => {
      console.log(res)
      var productDetail = res.data.Types.ProductDetail[0]
      that.setData({
        description: productDetail.Description
      })
    }, error => {
      console.log(error)
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