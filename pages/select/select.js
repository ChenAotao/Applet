//select.js
//获取应用实例
const app = getApp()

Page({
  data: {
    identityOne:"我是老板",
    identityTwo:"我是设备主"
  },
  //设备主按钮点击事件
  bindViewTap: function() {
    wx.navigateTo({
      url: '../equipmentOwner/equipmentOwner'
    })
  },
})
