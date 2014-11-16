var config = {
				
        reset:  true
      }

window.sr = new scrollReveal( config );

/* Responsive header */


$(document).ready(function() {
	
	var header = $('.wide-header');
	var headerMid = $('.header-scroll');

	header.css('z-index', '1000');
	headerMid.css('z-index', '900')

	$(document).scroll(function () {

		var body = $("body");
		var top = body.scrollTop();

		if(window.innerWidth >= 900) {

			if (top >= 300) {
				
				TweenMax.to(header, .4, {marginTop:-110})
				TweenMax.to(headerMid, .4, {marginTop:0})

			} 

			if (top <= 299) {
				
				TweenMax.to(headerMid, .4, {marginTop:-96})
				TweenMax.to(header, .4, {marginTop:0})
			}


		}

	});

	/* Medium responsive menu */

	var hamburger = $('.hamburger'), 
	overlay = $('.overlay'), 
	close = $('.close');

	close.click(closemenu);

	hamburger.click(openmenu);

	function closemenu() {
		overlay.css('display', 'none');
		headerMid.show();

	}

	function openmenu() {
		overlay.css('display', 'block');
		overlay.css('height', $(window.height), 'important')
		headerMid.hide();
		

	}


})