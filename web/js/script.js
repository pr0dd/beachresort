$(function(){
	//MENU BUTTON
	function header(){
		//intialize vars
		var btn = $(".header button"),
				tm = $(".top-menu nav"),
				win = $(window),
				doc = $(document);

		//set event handlers
		btn.click(function(){
			tm.slideToggle();
		});
		win.resize(function(){
			if(doc.width()>600){
				tm.slideDown();
			}
		});
	}
	header();
	
	//SLIDER
	function slider(){
		//settings for slider
    var width = 100,
    		animationSpeed = 800,
    		pause = 4500,
    		currentSlide = 1;

    //cache DOM elements
    var slider = $('.slider'),
    		slideContainer = $('.move', slider),
    		slides = $('img', slider);

    //initialize interval
    var interval;
    
    //start function
    function startSlider() {
      interval = setInterval(function() {
        slideContainer.animate({'left': '-='+width+"%"}, animationSpeed, function() {
          if (++currentSlide === slides.length) {
            currentSlide = 1;
            slideContainer.css('left', 0+"%");
          }
        });
      }, pause);
    }
    
    //pause function
    function pauseSlider() {
      clearInterval(interval);
    }
    
    //set event handlers
    slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);
    
    //show caption on hover
  	function showCap(){
			var images = $(".move img"),
					cap = $(".slider .capture");
			images
				.on("mouseenter", function(){
					var attrText = $(this).attr("data-cap");
					cap.text(attrText).slideDown();
				})
				.on("mouseleave", function(){
					cap.slideUp();
				});
		}
		showCap();
    startSlider();
	}
	slider();
	//MENU BUTTON
	function holder(){
		//intialize vars
		var block = $(".food .holder");
		//set event handlers
		block.
		on("mouseenter", function(){
			$(this).find(".hidden").css({bottom:-150, display:"block"}).animate({bottom:0},500);
		}).
		on("mouseleave", function(){
			$(this).find(".hidden").css({bottom:0}).animate({bottom:-150},500);
		});
	}
	holder();
});
