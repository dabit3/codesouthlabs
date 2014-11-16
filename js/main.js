var config = {
				
        reset:  true
      }

window.sr = new scrollReveal( config );

/* Remove click delay */

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

/* End remove click delay */

/* Responsive header */

$(document).ready(function() {

	/* Mobile Menu JS */

	var open = false;

	var mobileHamburger = $('.mobile-hamburger')
			mobileMenu = $('.mobile-menu')
	;

	mobileHamburger.click(openmobile);

	function openmobile() {
		if (open == false) {
			TweenMax.to(mobileMenu, .3, {marginTop: 0});
			open = true;
		} else {
			TweenMax.to(mobileMenu, .3, {marginTop: -200});
			open = false;
		}
		
	}

	/* End mobile menu JS */
	
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

	/* Fix safari mobile bug */

	(function(doc) {

		var addEvent = 'addEventListener',
		    type = 'gesturestart',
		    qsa = 'querySelectorAll',
		    scales = [1, 1],
		    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

		function fix() {
			meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
			doc.removeEventListener(type, fix, true);
		}

		if ((meta = meta[meta.length - 1]) && addEvent in doc) {
			fix();
			scales = [.25, 1.6];
			doc[addEvent](type, fix, true);
		}

	}(document));



})