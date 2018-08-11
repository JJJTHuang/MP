App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    require('./utils/sdk-v1.2.1.js');
    let clientId = '7635379fecb58038168d';
    wx.BaaS.init(clientId);
  }
})
