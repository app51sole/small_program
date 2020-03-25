//app.js
import http from '/utils/http.js'

App({
  onLaunch: function () {
    
  },
  getUrl: function (model) {
    return this.globalData.domainUrl + model
  },
  globalData: {
    domainUrl: 'https://interface.365som.com/baiduminipro_m/',
  }
})