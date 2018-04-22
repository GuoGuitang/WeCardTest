import grace from "../../grace/index.js"
grace.page({
  data: {
    namestr:' ',
    addtest:'',
    liststr:[],
    upgradeFlag: 'UnKnown',
    deleteFlag:'UnKnown'
  },
  getRESTAPI: function (e) {
    this.$http.get("https://localhost:3000/users").then((d) => {
      console.log(d.data);
      this.$data.namestr = d.data;
    })
  },
  getRESTAPIADD: function (e) {
    let str=JSON.stringify(e.detail.value);
    this.$http.post("https://localhost:3000/users/add/"+str).then((d) => {
      console.log(d.data);
      this.$data.addtest = JSON.stringify(d.data);
    })
    // this.$http.post("https://localhost:3000/users/add", e.detail.value).then((d) => {
    //   console.log(e.detail.value);
    //   console.log(d.data);
    //   this.$data.addtest = JSON.stringify(d.data);
    // })
  },
  getRESTAPIUPGRADE: function (e) {
    this.$http.post("https://localhost:3000/users/upgrade", e.detail.value).then((d) => {
      console.log(d.data);
      this.$data.upgradeFlag = d.data;
    })
  },
  getRESTAPIDELETE: function (e) {
    this.$http.post("https://localhost:3000/users/delete", e.detail.value).then((d) => {
      console.log(d.data);
      this.$data.deleteFlag=d.data;
    })
  },
  getRESTAPIALL: function(e){
    this.$http.get('https://localhost:3000/users/list').then((d)=>{
      console.log(d.data);
      let strarray=[];
      for (let i=0;i<d.data.length;i++){
        let str = {
          "username": d.data[i].username
        };
        strarray.push(str);
      }
      this.$data.liststr = strarray;
    })
  },
  navigateToNewPage:function(){
    wx.navigateTo({
      url: '../newpage/newpage'
    })
  },
  navigateToAssociationPage: function(){
    wx.navigateTo({
      url: '../associationPage/associationPage'
    })
  },
  navigateToInfoPage: function () {
    wx.navigateTo({
      url: '../infoPage/infoPage'
    })
  },
  navigateToAllBridgeCardPage: function () {
    wx.navigateTo({
      url: '../allBridgeCardPage/allBridgeCardPage'
    })
  },
  navigateTofinancialStatisticsPage: function () {
    wx.navigateTo({
      url: '../financialStatisticsPage/financialStatisticsPage'
    })
  },
  navigateTofinancialItemsPage: function () {
    wx.navigateTo({
      url: '../financialItemsPage/financialItemsPage'
    })
  }, 
  navigateTographicMessagePage: function () {
    wx.navigateTo({
      url: '../graphicMessagePage/graphicMessagePage'
    })
  }, 
  navigateTorequestPaymentPage: function () {
    wx.navigateTo({
      url: '../request-payment/request-payment'
    })
  }, 
  onShareAppMessage: function (options) {
    　　var that = this;
    　　// 设置菜单中的转发按钮触发转发事件时的转发内容
    　　var shareObj = {
      　　　　title: "转发的标题",        // 默认是小程序的名称(可以写slogan等)
      　　　　path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
      　　　　imgUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      　　　　success: function (res) {
        　　　　　　// 转发成功之后的回调
        　　　　　　if (res.errMsg == 'shareAppMessage:ok') {
        　　　　　　}
      　　　　},
      　　　　fail: function () {
        　　　　　　// 转发失败之后的回调
        　　　　　　if (res.errMsg == 'shareAppMessage:fail cancel') {
          　　　　　　　　// 用户取消转发
        　　　　　　} else if (res.errMsg == 'shareAppMessage:fail') {
          　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
        　　　　　　}
      　　　　},
      　　　　complete: function () {
        　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
      　　　　}
  　　};
  　　// 来自页面内的按钮的转发
  　　if(options.from == 'button') {
    　　　　var eData = options.target.dataset;
    　　　　console.log(eData.name);     // shareBtn
    　　　　// 此处可以修改 shareObj 中的内容
    　　　　shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
  　　}
　　// 返回shareObj
　　return shareObj;
  }
})