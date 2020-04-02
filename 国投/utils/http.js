const request = (method, url, data, response, error) => {
  var urlStr = url
  if (urlStr.substr(urlStr.length - 1, 1) != '?') {
    urlStr = urlStr + '?'
  }
  for (var key in data) {
    urlStr = urlStr + key + '=' + data[key] + '&'
  }
  urlStr = urlStr.substr(0, urlStr.length - 1)
  console.log(urlStr)
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