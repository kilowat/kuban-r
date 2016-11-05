$(document).ready(function () {

  $('#slider').slick();
  $('#product-slider').slick();

  $('.back-contact-info .c-btn').click(function () {
    var self = $(this);
    var text = $(this).find('.text');
    var button = self.find('.ic-block');
    if(text.is(':animated'))
      return;
    
    if(!text.is(':visible')){
      open();
    }else{
      close();
    }
    
    function open() {
    button.hide();
      $('.about-text').css('opacity','0.3');
     text.animate({
        width: 'toggle'
      }, 350);
    }

    function close() {
     text.animate({
        width: 'toggle',
      }, 350, function(){
        button.show();
       text.hide();
       $('.opacity-toggle').css('opacity','1');
      });
    }
  });

});