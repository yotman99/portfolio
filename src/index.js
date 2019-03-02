import $ from 'jQuery';
import _ from 'lodash';
import './css/bootstrap.css';
import './css/style.css';
import profile from './images/me.jpg';

$(document).ready(function(){
    var burgerMenu = function() {

    $('.js-colorlib-nav-toggle').on('click', function(event){
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas'); 
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');  
      }
    });
  };

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function() {

    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ( $('body').hasClass('offcanvas') ) {

          $('body').removeClass('offcanvas');
          $('.js-colorlib-nav-toggle').removeClass('active');
      
        }
        
      }
    });

    $(window).scroll(function(){
      if ( $('body').hasClass('offcanvas') ) {

          $('body').removeClass('offcanvas');
          $('.js-colorlib-nav-toggle').removeClass('active');
      
        }
    });

  };
})

  