$(document).ready(function (){
    
    
   
    $('#myCarousel').on('slide.bs.carousel', function () {
  
  $('.carousel').next();

});  
    $('.gerr-check').click(function (){
        $('.option-box').fadeToggle(500);
    });
    var Li = $('.option-box ul li');
        Li
        .eq(0).css('backgroundColor','#F00').end()
        .eq(1).css('backgroundColor','#E426D5').end()
        .eq(2).css('backgroundColor','#009AFF').end()
        .eq(3).css('backgroundColor','#FFF400');
        Li.click(function (){
            $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        });   
        $('html').niceScroll({
            cursorwidth : '10px'
        });
});   
