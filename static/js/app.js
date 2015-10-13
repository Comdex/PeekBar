var main = function () {
  "use strict";
  $('.content').click(function () { // 点击内容
    $('.barrier').fadeIn(300); // 半透明图层逐渐出现
    $('.peekbar').animate({ top: "50%" }, 300); // PeekBar 滑入
    $('.main').animate({ zoom: "0.95", height:"95%", width: "95%", top: "2.5%", left: "2.5%" }, 300); // 主内容区域缩小
  });
  $('.barrier').click(function () { // 点击 PeekBar 以外的区域
    $('.barrier').fadeOut(300); // 半透明图层逐渐隐藏
    $('.peekbar').animate({ top: "100%" }, 300); // PeekBar 滑出
    $('.main').animate({ zoom: "1", height:"100%", width: "100%", top: "0%", left: "0%" }, 300); // 主内容区域放大
  });
  $(document.getElementById("done")).click(function () { // 点击 Done 按钮
    $('.barrier').fadeOut(300); // 半透明图层逐渐隐藏
    $('.peekbar').animate({ top: "100%" }, 300); // PeekBar 滑出
    $('.main').animate({ zoom: "1", height:"100%", width: "100%", top: "0%", left: "0%" }, 300); // 主内容区域放大
  });
};

$(document).ready(main);