App({
  globalData: {},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this
    wx.getLocation({
      success: function(res) {
        console.log(
          JSON.stringify(res)
        )
      // 根据经纬度获取城市
      var url = 'https://apis.map.qq.com/ws/geocoder/v1';
      that.request({
        url,
        data: {
          "location": `${res.latitude},${res.longitude}`,
          "key": "CO4BZ-RJNKG-UZXQB-IFKJ3-FBL45-2CBXW"
        }
        }).then(
        res => {
          console.log(res)
          const { city } = res.data.result.address_component
          url = 'https://api.seniverse.com/v3/weather/now.json'
          that.request({
            url,
            data: {
              key: 'jvfbfxcrjxpylqki',
              location: city,
              language: 'zh-Hans',
              unit: 'c'
            }
          }).then(res => {
            console.log(res)
          })
        }
        ).catch(e => {
          console.log(e)
        }
      )


      


      }
    })


    

  },

  request: function ({ url, data, header, method = 'GET', dataType = 'json', responseType = 'text' }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header,
        method,
        dataType, 
        responseType,
        success: function(data) { resolve(data) },
        fail: function (err) { reject(err) }
      })
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
