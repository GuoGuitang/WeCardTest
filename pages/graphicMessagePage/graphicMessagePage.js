// pages/graphicMessagePage/graphicMessagePage.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let test=
    `<section class="KolEditor" style="undefined">
    <section style="max-width:320px !important;margin:0px auto;">
        <section style="display:flex;justify-content:flex-end;">
            <section style="width:80px;margin-right:20px;">
                <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/1801014c182775dc812c8be8b9a6bed3d26066.png" class="KolImg" style="max-width:100%;"/>
            </section>
            <section style="width:120px;flex-shrink:0;background-color:#87c55f;box-sizing:border-box;padding:8px;height:120px;">
                <section style="border:2px solid #fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;">
                    <p style="margin:0px;font-size:17px;color:#fff;">
                        中国
                    </p>
                    <p style="margin:0px;font-size:17px;color:#fff;">
                        传统
                    </p>
                    <p style="margin:0px;font-size:17pxpx;color:#fff;">
                        节气
                    </p>
                </section>
            </section>
        </section>
        <section style="display:flex;justify-content:flex-start;align-items:flex-end;">
            <section style="width:200px;flex-shrink:0;">
                <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/18010154199fd187e87035041734f98e57b336.jpeg" class="KolImg" style="max-width:100%;"/>
            </section>
            <section style="max-width:81px;">
                <img src="http://kol-statics.oss-cn-beijing.aliyuncs.com/editor/180101a017ae049572ef7541fbad4edb60f1ad.png" class="KolImg" style="max-width:100%;"/>
            </section>
        </section>
    </section>
</section>`;
    WxParse.wxParse('article', 'html', test, that, 0);
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
  
  }
})