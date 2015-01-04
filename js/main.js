
/* Remove click delay */

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

/* End remove click delay */


$(document).ready(function() {

	$('.SOLDOUT').click(function() {
		swal("This class is sold out.");
	})
	

	/* Check window height */

		// var body = $("body");
		

		// if(window.innerWidth >= 900) {

		// 	if (top >= 300) {
				
		// 		TweenMax.to(header, .4, {marginTop:-110})
		// 		TweenMax.to(headerMid, .4, {marginTop:0})

		// 	} 

		// 	if (top <= 299) {
				
		// 		TweenMax.to(headerMid, .4, {marginTop:-96})
		// 		TweenMax.to(header, .4, {marginTop:0})
		// 	}


		// }


	/* basic swal */

	$('.followadobephotoshopworkshop').click(basicswal);
	$('.followintrotopython').click(basicswal);
	$('.followresponsivedesign').click(basicswal);
	$('.followhybridmobileappdev').click(basicswal);

	function basicswal(e) {
		e.preventDefault();
		swal("The date for this class has not yet been announced. ", "To let us know of your interest, please follow this class. Once we have enough people to start the class, you will be notified of the next class date. Thanks!");
		
	}

	/* Send Mail - Teacher Form*/

	$('#teacher').click(function () {
        var name = $('#form-name').val();
        var email = $('#form-email').val();
        var message = $('#form-feedback-questions').val();
        var course = $('#form-course').val();
        var varData = 'name=' + name + '&email=' + email + '&message=' + message + '&course=' + course;

        if (name == "") {
    			swal("Please fill out the name field.");
    			return false;
    		}

    		if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}

    		if (message == "") {
    			swal("Please fill out the message area.");
    			return false;
    		}

        if((name != "") && (email != "") && (message != "")) {
        		$("#theteacherform").hide();
            var inst = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];
            inst.open();
            $.ajax({
                type: "POST",
                url: "teachermail",
                data: varData,
                success: function() {
                }
            });
            return false;
        }
    });

	/* Send Mail - Contact Form */

	$('#contacter').click(function () {
        var name = $('#form-name').val();
        var email = $('#form-email').val();
        var message = $('#form-feedback-questions').val();
        var phone = $('#form-phone').val();
        var varData = 'name=' + name + '&email=' + email + '&message=' + message + '&phone=' + phone;

        if (name == "") {
    			swal("Please fill out the name field.");
    			return false;
    		}

    		if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}

    		if (message == "") {
    			swal("Please fill out the message field.");
    			return false;
    		}

        if((name != "") && (email != "")) {
        		$("#theteacherform").hide();
            var inst = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];
            inst.open();
            $.ajax({
                type: "POST",
                url: "contactermail",
                data: varData,
                success: function() {
                }
            });
            return false;
        }
    });

	/************ follow classes ************** */

	var tl = new TimelineMax();

	/* Intro to web dev */
	var hiddenform = $(".hiddenform");

	var followintrotowebdevopen = false;

	$('.followintrotowebdev').click(function() {
		
		if (followintrotowebdevopen == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			followintrotowebdevopen = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			followintrotowebdevopen = false;
		}
		
	})

	$('#class-introtowebdev-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Intro To Web Development! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../introtowebdevfollow",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									followintrotowebdevopen = false;
                }
            });
            return false;
        }
    });

	/* Intro to Python */


	var tl = new TimelineMax();

	var hiddenform = $(".hiddenform");

	var introtopythonfollow = false;

	$('.introtopythonfocus').click(function() {
		
		if (introtopythonfollow == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			introtopythonfollow = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			introtopythonfollow = false;
		}
		
	})

	$('#class-python-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Intro To Python! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/introtopythonfollow",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });

	/* Responsive Design Bootcamp */

	
	var tl = new TimelineMax();

	var hiddenform = $(".hiddenform");

	var introtoresponsive = false;

	$('.class-responsive-follow').click(function() {
		
		if (introtoresponsive == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			introtoresponsive = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			introtoresponsive = false;
		}
		
	})

	$('#class-responsive-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Responsive Design Bootcamp! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/responsivedesignbootcampfollow",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });

	/* Intro To Wordpress */

	var tl = new TimelineMax();

	var hiddenform = $(".hiddenform");

	var followwordpressbootcamp = false;

	$('.followwordpressbootcamp').click(function() {
		
		if (followwordpressbootcamp == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			followwordpressbootcamp = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			followwordpressbootcamp = false;
		}
		
	})

	$('#class-wordpressbootcamp-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Wordpress Bootcamp! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/introtowordpressfollow",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });

	/* Hybrid Mobile App Dev */

	var tl = new TimelineMax();

	var hiddenform = $(".hiddenform");

	var hybridmobileappdevfollowfocus = false;

	$('.hybridmobileappdevfollowfocus').click(function() {
		
		if (hybridmobileappdevfollowfocus == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			hybridmobileappdevfollowfocus = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			hybridmobileappdevfollowfocus = false;
		}
		
	})

	$('#class-hybrid-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Hybrid Mobile App Development Workshop! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/hybridmobileappdevfollow",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });


	/* Adobe Photoshop Workshop */

	var tl = new TimelineMax();

	var hiddenform = $(".hiddenform");

	var adobephotoshopintro = false;

	$('.adobephotoshopintro').click(function() {
		
		if (adobephotoshopintro == false) {
			tl.to(hiddenform, .4, {autoAlpha: 1, display:'block'});
			adobephotoshopintro = true;
		} else {
			tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
			adobephotoshopintro = false;
		}
		
	})

	$('#class-photoshop-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Adobe Photoshop Workshop! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/adobephotoshopworkshop",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });

	/* Add to receive updates form */

	$('#getupdatesbutton').click(function () {
	        
	        var email = $('#updates-email').val();
	        var varData = 'email=' + email;
	        if (email == "") {
	    			swal("Please fill out the email field.");
	    			return false;
	    		}
	        
	        if(email != "") {
	        		swal("You've signed up for updates! ", "Unsubscribe at any time.", "success");
	            
	        		emailRef.push({ email: email });
	            console.log(email);

	            $('#updates-email').val("");
	            $.ajax({
	                type: "POST",
	                url: "phpsendmail/sendupdatedemail",
	                data: varData,
	                success: function() {
	                	
	                }
	            });

	            return false;
	        }
    });

	/* Add to receive updates form coursesfooter */

	$('#getupdatesbuttoncoursesfooter').click(function () {
	        
	        var email = $('#updates-email').val();
	        var varData = 'email=' + email;
	        if (email == "") {
	    			swal("Please fill out the email field.");
	    			return false;
	    		}
	        
	        if(email != "") {
	        		
	        		swal("You've signed up for updates! ", "Unsubscribe at any time.", "success");
	            $('#updates-email').val("");

	            emailRef.push({ email: email });
	            console.log(email);

	            $.ajax({
	                type: "POST",
	                url: "../phpsendmail/sendupdatedemail",
	                data: varData,
	                success: function() {
	                	
	                }
	            });

	            return false;
	        }
    });

	/* ************* Follow AngularJS Class *********  */

	$('#class-introtoangularjs-follow').click(function () {
        
        var email = $('#class-email').val();
        var varData = 'email=' + email;

        if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}
        if(email != "") {
        		
        		swal("You're following Intro To AngularJS! ", "Unsubscribe at any time.", "success");

            $.ajax({
                type: "POST",
                url: "../phpsendmail/introtoangularjs",
                data: varData,
                success: function() {
                	$('#class-email').val("");
                	tl.to(hiddenform, .4, {autoAlpha: 0, display:'none'});
									introtopythonfollow = false;
                }
            });
            return false;
        }
    });

	/* ****************** End Mail Senders **************************/

	/* Mobile Menu JS */

	var open = false;

	var mobileHamburger = $('.mobile-hamburger')
			mobileMenu = $('.mobile-menu')
	;

	mobileHamburger.click(openmobile);
	$('.mobile-content').click(closemobile);

	function closemobile() {
		if (open == true) {
			TweenMax.to(mobileMenu, .3, {marginTop: -245});
			open = false;
		};
	}

	function openmobile() {
		if (open == false) {
			TweenMax.to(mobileMenu, .3, {marginTop: 8});
			open = true;
		} else {
			TweenMax.to(mobileMenu, .3, {marginTop: -260});
			open = false;
		}
		
	}

	/* End mobile menu JS */
	
	var header = $('.wide-header');
	var headerMid = $('.header-scroll');

	header.css('z-index', '1000');
	headerMid.css('z-index', '900')

	// $(document).scroll(function () {

	// 	var body = $("body");
	// 	var top = body.scrollTop();

	// 	if(window.innerWidth >= 900) {

	// 		if (top >= 300) {
				
	// 			TweenMax.to(header, .4, {marginTop:-110})
	// 			TweenMax.to(headerMid, .4, {marginTop:0})

	// 		} 

	// 		if (top <= 299) {
				
	// 			TweenMax.to(headerMid, .4, {marginTop:-96})
	// 			TweenMax.to(header, .4, {marginTop:0})
	// 		}


	// 	}

	// });

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