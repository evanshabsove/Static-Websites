$(function(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var mouseHover = 0
  $(document).on('mousemove', function(e){
    $('.circle').css({
      left: e.pageX - 100,
      top: e.pageY - 100,
    });
  });
  $('.circle').click(function(){
    var divPosition = $('.circle').position()
    var divWidth = $('.circle').width();
    console.log();
    if (winWidth <= divPosition.left + divWidth/2  || 0 > divPosition.left + divWidth/4) {
      mouseHover = 100
      $('.circle').css({
        width: 200,
        height: 200
      });
    } else {
      mouseHover += 100
      $('.circle').animate({
        height: "+=100",
        width: "+=100",
        borderRadius: "+=100"
      }, 5000, function(){

      });
    }

    $(document).on('mousemove', function(e){
      $('.circle').css({
        left: e.pageX - mouseHover,
        top: e.pageY - mouseHover,
      });
    });
  });
});
