(function($){

  $(document).ready(function() {
          //Team Slider
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
            });
        //Team Slider End

        //Go Top Button 
      
      var scroll_top = $(".scroll-top"); 
      var Height = $(window).height(); 
      var Height = Height / 3; 

      $(window).scroll(function(){
        var WinHeight = $(this).scrollTop(); 
        if( WinHeight > Height ) {
          scroll_top.fadeIn("1000", "linear");  
        } else {
          scroll_top.fadeOut("1000", "linear"); 
        }
      }); 

      scroll_top.click(function(){
        $("body,html").animate({
          "scrollTop" : 0,
        }, 800); 
      });

      //End Go Top Button

      //Sticky Header
      var Header = $(".header"); 
      var Header_Height = Header.outerHeight(); 
      
      $(window).scroll(function(){
        var WinHeight = $(this).scrollTop(); 
        if(WinHeight > Header_Height){
          Header.addClass('sticky'); 
          Header.slideDown(300); 
        } else {
          Header.removeClass('sticky');
          Header.removeAttr("style");  
        }
      });

      //End Sticky Header 

      //Responsive Menu 
      var menu_bar = $(".menu-bar span"); 
      var main_menu = $(".header .navigation-menu .nav"); 
      menu_bar.click(function(){
        main_menu.slideToggle(300); 
      }); 
      $(window).resize(function(){
        main_menu.removeAttr("style"); 
      });

      //End Resonsive Menu

      //Menu Anchor Setup
      var menu_anchor = $(".header .navigation-menu ul li a"); 
      menu_anchor.each(function(){
        $(this).click(function(e){
          e.preventDefault(); 
          menu_target = $(this.hash).offset().top; 
          $("body,html").animate({
            scrollTop: menu_target,
          }); 
        }); 

      });

      //Menu Anchor End

      //Menu active Class replace with Scroll
      $(window).scroll(function(){
        $(".header .navigation-menu ul li a").each(function(){
          var menu_offset = $(this.hash).offset().top; 
          var WinHeight = $(window).scrollTop() + 100; 
          if(WinHeight >= menu_offset){
            $(".header .navigation-menu ul li.active").removeClass('active'); 
            $(this).parent().addClass("active"); 
          }
        })
      })


 });


})(jQuery); 