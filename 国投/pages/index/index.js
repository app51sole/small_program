//index.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSkeleton: true,
    productList: [],
    pageIndex: 1,
    pageSize: 20,
    noData: false,
    noDataTitle: '不好意思，暂无数据',
    noMoreData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res)
      },
    })
    this.requestInfo()
  },

  requestInfo: function () {
    let data = {
      Method: 'GetProductListByIndustry',
      SmallIndustryId: 1,
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize
    }
    let that = this
    app.GET(app.getUrl('Handler.ashx'), data, res => {
      wx.stopPullDownRefresh() //停止下拉刷新
      console.log(res)
      var productList = res.data.Types.ProductList
      var plist = that.data.pageIndex == 1 ? [] : that.data.productList
      plist = plist.concat(productList)
      setTimeout(() => {
        that.setData({
          showSkeleton: false,
          productList: plist,
          noData: that.data.pageIndex == 1 && productList.length === 0,
          noMoreData: productList.length < that.data.pageSize || that.data.pageIndex == 2
        })
      }, 1000);
      
    }, error => {
      console.log(error)
    })
  },

  enterDetail: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/productDetail/productDetail?productID=' + e.currentTarget.id,
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
    this.data.pageIndex = 1
    this.requestInfo()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.data.noMoreData) {
      this.data.pageIndex = this.data.pageIndex + 1
      this.requestInfo()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})