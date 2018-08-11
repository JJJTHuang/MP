// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    text: '',
    temperature: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
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
    const app = getApp();
    const { currentCity } = app.globalData
    let url = 'https://api.seniverse.com/v3/weather/now.json';
    var that = this;
    app.request({
      url,
      data: {
        key: 'jvfbfxcrjxpylqki',
        location: currentCity,
        language: 'zh-Hans',
        unit: 'c'
      }
    }).then(res => {
      that.formatData(res)
    })
  },
  formatData: function (res) {
    const { data: { results: [data]} } = res;
    console.log(data)
    const { now: { text, temperature }, location: { path } } = data
    this.setData({
      text, temperature, path
    })
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