// welcome.js
Page({
  data: {
    'profile': {
      nickName: 'Hello Word',
      avatarUrl: '/image/img.png'
    }
  },
  getProfile(res) {
    this.setData({
      'profile': res.detail.userInfo
    })
  }
})