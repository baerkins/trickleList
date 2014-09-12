;(function($) {

  $.fn.trickleList = function() {

    // Setup Vars
    var settings = $.extend({
      childTarget: $(this),
      delayInc: 150,
      fadeTime: 400,
      minWidth: 0
    });

    // Function for revealing children of element
    function revealItem(){
      var winWidth = $(window).width();
      if(winWidth > settings.minWidth){
        var delayTime = 0;
        $(settings.childTarget).children().each(function(){
          $(this).stop(true, false).delay(delayTime).fadeIn(settings.fadeTime);
          delayTime = delayTime + settings.delayInc;
        });
      }
    }

    // Function for hiding children of element
    function hideItem(){
      var winWidth = $(window).width();
      if(winWidth > settings.minWidth){
        $(settings.childTarget).children().each(function(){
          $(this).stop(true, false).fadeOut(settings.fadeTime);
        });
      }
    }

    // Hide the Elements if needed
    function windowCheck() {
      if(winWidth > settings.minWidth){
        $(settings.childTarget).children().hide();
      }
    }

    windowCheck();

    $(this).hover(revealItem, hideItem);

    $(window).resize(function(){ windowCheck(); })

  }

}(jQuery));