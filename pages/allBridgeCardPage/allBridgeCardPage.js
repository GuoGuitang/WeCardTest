// pages/allBridgeCardPage/allBridgeCardPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '所有', content: '内容一' },
      { title: '巴黎高科', content: '内容二' },
      { title: '北京大学法国校友会', content: '内容三' },
      { title: '汉唐中医', content: '内容四' },
      { title: '选项五', content: '内容五' },
      { title: '选项六', content: '内容六' }
    ]  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  onClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  }
})