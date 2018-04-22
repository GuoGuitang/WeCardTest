// pages/associationPage/associationPage.js
var WxParse = require('../../wxParse/wxParse.js');
var base64 = require("../../image/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'汉唐中医协会',
    buttonFlag: true,
    buttonName: ['成员','文章','活动',]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let test=
    `<section data-role="paragraph" class="_135editor" style="border: 0px none; padding: 0px;">
            <section style="width: 100%; margin: 0px auto; box-shadow: #bbbbbb 3px 5px 10px; border-right: 4px solid #d4d6d6;" data-width="100%">
                <section style="padding: 10px">
                    <section style="display: flex;display:-webkit-flex;align-items: flex-end;-webkit-align-items:flex-end;background-color: #ff9cb9;border-top: 2px solid #dae2df;border-left:2px solid #dae2df ">
                        <section style="width: 55%;text-align: center;" data-width="55%">
                            <section style="width: 80%;margin: 0 auto">
                                <img src="http://mpt.135editor.com/mmbiz_png/uN1LIav7oJic4Ve5vUUbyA9w3mdurMo2kGjBsaxTLBopPIoolmibGynpfvYzpSib0miaYgI0ibR8jvjDsbduBffkf4A/0?wx_fmt=png" style="width: 100%;display: block;" data-width="100%"/>
                            </section>
                            <p style="margin: 0;padding-top:5px;color: #fefefe;" class="135brush" data-brushtype="text">
                                <strong>长按二维码关注我们</strong>
                            </p>
                        </section>
                        <section style="width: 45%;" data-width="45%">
                            <section style="padding: 10px 0px 7px 6px">
                                <img src="http://mpt.135editor.com/mmbiz/yqVAqoZvDibHUYL1W4jVtKs2cuj8licOibPXibhFokJEACsh91ZicQd2CyFpMkwjX0S2zJLqiaqOgtDRCibEPI9dq6ic2A/0" style="width:80%;display: block;margin: 0 auto;margin-bottom: 5px;" data-width="80%"/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</section>`;
    //WxParse.wxParse('article', 'html', article, that, 5);
    WxParse.wxParse('article', 'html', test, that, 0);
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