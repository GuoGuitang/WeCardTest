// pages/associationPage/associationPage.js
var WxParse = require('../../wxParse/wxParse.js');
var base64 = require("../../image/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonFlag: true,
    buttonName: ['成员','文章','活动',]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let article =
      `<p align="center"><font color="#FF0000"><b>近日來因為此頁篇幅過長，需要重新整理，所有文章都在歸類中，一篇不少，希望大家能適應。</b></p><p style="line-height: 150%" align="center"><b>由於更新網頁散佈於許多子連結中,</b><b>如果大家擔心會遺漏一些新文章</b><b>讀者可以使用這個網站</b><b>，http://hantangrss.blogspot.com/</b></font><b>這樣隨時就可以看到我的最新更新文章</font></b><b>，感謝大家對我的支持與鼓勵。也同時感謝這位出身矽谷的電腦工程師，為本站所設計的專用軟體。</b></font></p><p style="line-height: 150%" align="center"><strong><font size="3">本人之網站設立於美國，</font>受到美國聯邦智慧財產權法的保護，請尊重智慧財產權 ，</font>本網頁中有應用到的新聞報導部分，</font>其所有著作權均屬於原媒體單位的，</font>本人是 引用它來做為評論之依據，</font>所有評論部分是屬於本人之智慧財產權</font>。</strong><strong style="line-height: 150%;">本人的作品如果受到侵害，將依法提出追究。</strong><strong style="line-height: 150%;"><font size="3">任何人使用本人之知識 , 但是必須註明出處 , 竊取本人之專業知識據為己有 , 為違反智慧財產權法 , 本人將追究其刑事責任 , 絕不姑息養奸 , 請勿以身試法 , 如果你想<font color="#FF0000">引用</font></font></strong><font style="line-height: 150%;" size="3" face="新細明體" color="#FF0000"><b>本網站之文章，著作權皆屬本人所有，任何人作文字轉載或網站轉貼，均須經本人同意」</b></font><strong style="line-height: 150%;"><font size="3"> 有問題詢問時 , 請留下你自己的FAX號碼 , 許多人留E-Mail給我 , 恕我無法回覆 , 否則我的E-Mail信箱會塞爆兼中毒,無中藥可治之毒 , 請見諒.</font></strong></p><p><strong>&nbsp;&nbsp;&nbsp; 讀者可以進入<a href="http://www.hantang.org.cn/"><font color="#000080">大陸支援網站</font></a><font color="#000080">&nbsp;&nbsp;&nbsp; </font>他們整理後的內容比我這清楚許多,我只是隨興而寫的,所以比較凌亂些.</strong></p>
<p style="line-height: 150%"><font color="#0000FF"><b>&nbsp;&nbsp;&nbsp;&nbsp;<font size="4"> 許多讀者來傳真,希望我來解決你們的問題,請勿抱希望,因為我是無法回答你們的問題,我這裡是個學術網站,不是醫療諮詢網站,讀者有疾病的問題時,請就近找中醫師來協助你們,你們問到我時,我只有一句話,要找我看病請來我這面對面看,因為讀者不是專業中醫所以你們寫的病史我無法捉住重點,等於是雞同鴨講,我實在無能為力去猜測你們遇到什麼問題,所以請千萬不要再傳來你們個人的問題,以免耽誤你們的病情,目前我是一律不做回答的,請勿再試,並請見諒中.</font></b></font></p>`;
    WxParse.wxParse('article', 'html', article, that, 5);
    this.setData({
      icon60: base64.icon60
    })
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
  applyAssociation :function(){

  }
})