import citys from './loc';

const markers = citys.map(loc => {
  let latign = loc.latIng.split(',');
  return {
    id: loc.name,
    latitude: parseFloat(latign[1]),
    longitude: parseFloat(latign[0]),
    name: loc.name,
    iconPath: './icon-location.png'
  }
})

// page/map/map.js
Page({
  data: {
    latitude: markers[0].latitude,
    longitude: markers[0].longitude,
    markers: markers
  },
  switchCity: function (e) {
    console.log(e.markerId);
    const app = getApp();
    app.globalData.currentCity = e.markerId
    wx.switchTab({
      url: '/page/index/index',
    })
  }
})