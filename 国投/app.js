//app.js
import http from '/utils/http.js'

App({
  onLaunch: function () {
    
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
  globalData: {
    domainUrl: 'https://interface.365som.com/baiduminipro_m/',
  }
})