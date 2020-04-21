//app.js
import http from '/utils/http.js'

App({
  onLaunch: function () {
    wx.login({
      success(res) {
        console.log(res)
      }
    })
    wx.requestSubscribeMessage({
      tmplIds: [],
    })
  },
  getUrl: function (model) {
    return this.globalData.domainUrl + model
  },
  GET: function (url, data, response, error) {
    http.GET(url, data, response, error)
  },
  POST: function (url, data, response, error) {
    http.POST(url, data, response, error)
  },
  onHide: function () {
    console.log('进入后台')
  },
  onShow: function () {
    console.log('进入前台')
  },
  globalData: {
    domainUrl: 'https://interface.365som.com/baiduminipro_m/',
  }
})