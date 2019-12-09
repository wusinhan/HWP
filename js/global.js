

// 無縫切換
$(document).pjax('a[target!=_blank]', 'main', {
  fragment: 'main',
});

// 選單
//
// $('.nav li a').click(function(e) {
//   $('.nav li a.current').removeClass('current');
//   $(this).addClass('current');
// });