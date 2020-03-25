const request = (method, url, data, response, error) => {
  // if (hasClick) {
  //   return
  // }
  // hasClick = true

  // wx.showLoading({
  //   title: '加载中...',
  //   mask: true
  // })

  wx.request({
    method: method,
    url: url,
    header: {
      'content-type': 'application/json'
    },
    data: data,
    success: res => {
      return response(res)
    },
    fail: err => {
      return error(err)
    },
    complete: info => {
      wx.hideLoading();
      // hasClick = false
    }
  })
}

module.exports = {
  GET: (url, data, response, error) => request('GET', url, data, response, error),
  POST: (url, data, response, error) => request('POST', url, data, response, error),
}