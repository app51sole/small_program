const request = (method, url, data, response, error) => {
  wx.showNavigationBarLoading()
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
      wx.hideNavigationBarLoading();
    }
  })
}

module.exports = {
  GET: (url, data, response, error) => request('GET', url, data, response, error),
  POST: (url, data, response, error) => request('POST', url, data, response, error),
}