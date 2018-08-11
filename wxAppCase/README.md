# wxAppCase

## 第9章/第10章
```
  用到了小程序的表单组件
  比较特殊的表单组件有

  radio 组件
    <radio-group name="radioKey" >
      <lable><radio value="a">A</radio></lable>
      <lable><radio value="b">B</radio></lable>
    </radio-group>

  picker 组件 滚动选择（相当于 select）

    <picker
      name="pickerKey"
      bindchange="pickerChange"
      range="{{[ 'option1', 'option2', 'option3' ]}}"
    >
      <view>
        当前选择: {{pickerKey[index: 当前选择的下标，需要定义 this.data.index ]}}
      </view>
    </picker>


```

## 第七章/第八章 （天气查询）
```
通过实现天气查询小程序,来学习几个api

布局
主要调用到 小程序的 map 组件， 为组件初始化地理位置，icon 图标 path.
以及点击后的回调 bindmarkerta  

逻辑
1. wx.getLocation 地理位置获取, 返回经纬度
2. wx.request 发起一个 api 请求 (小程序不存在跨域问题, 但是有 域名白名单 )

  wx.getLocation 的 success 函数 的返回值是
  {
    "latitude":31.22114,    // 维度
    "longitude":121.54409,  // 经度
    "speed":-1,
    "accuracy":65,
    "altitude":0,
    "verticalAccuracy":65,
    "horizontalAccuracy":65,
    "errMsg":"getLocation:ok"
  }
```

#### wx.getLocation()
参数|解释|--
-|-|-
type|默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标|
success|地理位置获取成功([接收参数](https://developers.weixin.qq.com/miniprogram/dev/api/location.html#wxgetlocationobject))|
altitude|Boolean|


#### wx.request()
参数|解释|--
-|-|-
success|接口调用成功|
fail| 失败 |
complete | 不论成功失败都会调用 |

## 第六章
- image 组件

>属性


属性|解释|取值范围
-|-|-
src | 图片地址 |
mode | 图表展示的模式 | 默认（scaleToFill）优选（widthFix）
lazy-load | 图片懒加载 默认（false） |
binderror | 加载失败时 发布到AppService 的事件名，事件对象为 event.detail = {errMsg: "something wrong"},  HandleEvent 类型，无默认值； |
bindload | 加载完成时 发布到AppService 的事件名，事件对象为 event.detail = {width, height}, HandleEvent  类型，无默认值； |


- camera

>属性

属性|解释|取值范围
-|-|-
device-position| 摄像头位置 默认（back）| front: 前置摄像头，back: 后置摄像头
flash| 闪光灯 默认：auto | auto:自动, on：打开, off：关闭
bindstop|摄像头在非正常终止时触发，例如：退出后台等 |
binderror|用户不同意使用摄像头时触发，EventHandle 类型 |
>事件

- audio

> 属性

属性|解释|取值范围
-|-|-
id|wx.createAudioContext('id') 可以拿到 audio 对象 |
src| 要播放音频的资源地址 |
loop| 是否循环播放 | 默认 false
controls| 是否展示默认控件 | 默认 false
poster | 音频上的图片资源地址 controls 为 false 时无效 |

> 事件

```
  var oAudio = wx.createAudioContext('id');
  oAudio.pay()        // 开始播放
  oAudio.pause()      // 暂停
  oAudio.seek(number) // 定位到那个时间段（秒）
```

## 第五章
- 实现加载更多 (合并数组)
- 实现已读未读状态， wx.getStorageSync， wx.setStorageSync
```
  同步读写本地缓存
    wx.getStorageSync
    wx.setStorageSync
  异步读写本地缓存
    wx.getStorage
    wx.setStorage
```
- 调用分享接口
```
  实现 onShaerAppMessage 接口
  {
    return {
      title: '分享标题'，
      imageUrl: '分享后的img',
      path: '用户点击后跳转的页面'
    }
  }
```

## 第四章
- 教你制作一个简单的文章列表 + 文章内容程序
- wx:for
```
  wx:for 用来便利页面中的数组
  wx:for-index="n" n 代表当前便利的第几个
  wx:for-item="item" 代表当前便利到的对象
  wx:key
    主要用于性能优化
    当数组出现变化时, 需要重新渲染.
    那么diff 算法就可以凭借 key 来确认那些需要重新创建那些需要排序. )
```
- 页面的生命周期
```
  onLoad    页面加载成功, 渲染之前
  onReady   页面渲染完成
  onShow    页面第一次展示
  onHide    页面隐藏
  onUnload  页面卸载
```
- navigator 组件
```
  url=""      需要跳转的路由
  open-type   要怎样打开新页面
    可选: navigate 保留当前页面打开新的页面
          redirect 关闭当前页面,跳转到新的页面
          switchTap 跳转到tabBar 中的某个页面, 并关闭非 tabBar 的所有页面
          navigateBack 关闭当前页面, 返回上一级或者多级
          reLaunch 关闭所有页面 打开一个新页面
  hover-class 手指按下 navigator 组件后的样式
```
- js 打开页面 和上面一样
```
  wx.navigateTo()
  wx.redirectTo()
  wx.switchTap()
  wx.navigateBack()
  wx.reLaunch()
```

## 第三章
- 使用 flex 为页面布局 横向 居中
- rpx 在微信小程序中 rpx 是一750 rpx 宽度为基准, 使用时, 要除以2 并且 rpx 会自动适配手机尺寸
- button open-type="getUserInfo" 这样的按钮点击后会开始获取用户资料. 第一次点击会 让用户授权
- wx.setData({ key: value }) 可以设置页面数据,  页面数据可以 在 wxml 中 通过 {{ data }} 输出
- this.data : {  默认数据 }  this -> data 可以设置页面数据的初始值

## 第二章
- 创建一个空白的项目
- 创建基础配置文件 app.json
- app.json -> pages 用来表示项目中所有的路由
- app.json -> window 用来描述 项目的标题外观等配置
- app.json -> window -> navigationBarTitleText 用来描述标题文本
- WXML  视图组件  text 放置文本 image 放置图片
- image 组件默认 尺寸为 300 * 255 这样会拉伸图片 mode="widthFix" 可以让图片按照正常比例和像素显示


## 第一章
- 小程序是基于前端技术的语言
- 小程序有更强大的硬件接口调用能力, 比H5更好
- 注册小程序, 不能使用公众号的邮箱, 必须使用一个没有注册过微信公众平台的 邮箱注册
- 个人号没有支付功能
