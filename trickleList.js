(function ($) {

  $.fn.trickleList = function() {

    var winWidth = $(window).width();

    // Setup Vars
    var options = $.extend({
      childTarget: $(this),
      delayInc: 150,
      fadeTime: 400,
      minWidth: 0
    });

    // Function for revealing children of element
    function revealItem(){
      var winWidth = $(window).width();
      if(winWidth > options.minWidth){
        var delayTime = 0;
        $(options.childTarget).children().each(function(){
          $(this).stop(true, false).delay(delayTime).fadeIn(options.fadeTime);
          delayTime = delayTime + options.delayInc;
        });
      }
    }

    // Function for hiding children of element
    function hideItem(){
      var winWidth = $(window).width();
      if(winWidth > options.minWidth){
        $(options.childTarget).children().each(function(){
          $(this).stop(true, false).fadeOut(options.fadeTime);
        });
      }
    }

    // Hide the Elements if needed
    function windowCheck() {
      if(winWidth > options.minWidth){
        $(options.childTarget).children().hide();
      }
    }

    windowCheck();

    $(this).hover(revealItem, hideItem);

    $(window).resize(function(){
      winWidth = $(window).width();
      windowCheck();
    });
  };

}(jQuery));