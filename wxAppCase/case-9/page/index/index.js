
var example = function (val) {
  let MyTableObject = new wx.BaaS.TableObject('bookshelf');
  let MyRecord = MyTableObject.create()
  val = {
    bookName: '1122aa',
    created_by: Date.now(),
    created_at: Date.now(),
    updated_at: Date.now()
  }
  console.log('request ...')
  return new Promise((resolve, reject) => {
    MyRecord.set(val).save().then(res => {
      console.log(res);
      resolve(res);
    }, rej => {
      console.log(rej);
      reject(rej);
    })
  })
}

// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMedicalCard: false,
    isShowUpdate: false,
    bloodTypes: ['A','B','AB','O', 'RH+', 'RH-'],
    index: 0,
    form: null,
    medicalConditions: [
      { name: '有过敏史', cheched: false },
      { name: '有过大型手术', cheched: false },
      { name: '有家族遗传病', cheched: false },
    ]
  },
  showMedicalCard: function() {
    this.setData({
      isShowMedicalCard: true
    })
  },
  formSubmit: function(e) {
    let val = e.detail.value;

    if (this.data.form !== null) {
      example(val).then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
      return;
    }
    if (!val.bloodType) {
      val.bloodType = this.data.index.toString();
    }

    // 第一次提交
    console.log('第一次提交')
    example(val).then(res => {
      console.log(res)
      wx.showToast({ title: '提交成功' });
      this.setData({
        form: {...res.data},
        isShowUpdate: true
      })
    }, rej => {
      console.log(rej)
      wx.showToast({ title: '提交失败' });
    })

  },
  bloodTypeChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  phoneNumberChange: function (e) {
    let phone = e.detail.value
    this.setData({
      phoneNumber: phone
    })
  },
  makePhoneCall: function (e) {
    const { phoneNumber } = this.data
    if (phoneNumber) {
      wx.makePhoneCall({
        phoneNumber
      })
    }
  }

})
