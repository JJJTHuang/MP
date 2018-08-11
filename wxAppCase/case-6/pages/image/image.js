function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}



// pages/image/image.js
Page({
  
  onReady: function(e) {
    this.audioCtx = wx.createInnerAudioContext('myAudio');
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioPlay: function (e) { 
    console.log(this.audioCtx);
    this.audioCtx.play();
  },
  audioPause: function (e) {
    this.audioCtx.pause();
  },
  audio14: function (e) { 
    this.audioCtx.seek(4);
  },
  audioStart: function (e) { 
    this.audioCtx.seek(4);
  },

  takePhoto() {
    var that = this
    const ctx = wx.createCameraContext(this);
    ctx.takePhoto({
      quality: 'high',
      success: res => {
        console.log('success')
        console.log(res)
        that.setData({
          src: res.tempImagePath
        })
      },
      error(e) {
        console.log('error')
        console.log(e);
      }
    })
  }
})