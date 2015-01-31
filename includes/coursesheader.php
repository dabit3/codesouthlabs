<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta charset="UTF-8">
	
	<title><?php echo $pagetitle ?> | Code South Labs</title>
	<meta name="description" content="<?php echo $pagedescription ?>"></meta>
	<meta name="keywords" content="<?php echo $pagekeywords ?>"></meta>

	<link rel="stylesheet" href="../lib/normalize-css/normalize.css">

	<script src="//use.typekit.net/vtj6dqq.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600' rel='stylesheet' type='text/css'>
	<script>try{Typekit.load();}catch(e){}</script>
	<link rel="stylesheet" href="../lib/remodal/dist/jquery.remodal.css">
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../lib/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="../lib/sweetalert/lib/sweet-alert.css">
	
	<script src="../lib/firebase/firebase.js"></script>
	<script>var ref = new Firebase("https://code-south-labs.firebaseio.com/");
	var emailRef = ref.child("emails/updatesignup");</script>
	<script>


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56987456-1', 'auto');
  ga('send', 'pageview');

</script>

</head>

<header class="wide-header">
	<section class="header-container">
		<div class="header-content">
			<a href="../"><img src="../img/logowhite.png" width="250" alt="" class="logo"></a>
			<div style="" class="teach-button"><a href="all"><p>COURSES</p></a></div>
			<div class="nav-container">
				<ul class="main-nav">					
					<li><a href="../about">ABOUT</a></li>		
					<li><a href="../contact">CONTACT</a></li>
					<li><a href="../teach">TEACH</a></li>	
					<li><a href="../index">HOME</a></li>		
				</ul>
			</div>
			<div class="clearfix"></div>
		</div>
	</section>
</header>

<section class="header-scroll">
	<section class="header-scroll-container">
		<div class="header-scroll-content">
			<a href="../"><img src="../img/logowhite.png" width="250" alt="" class="logo"></a>
		</div>
		<div class="hamburger">
			<img src="../img/hamburger.png" alt="">
		</div>
		<div class="clearfix"></div>
	</section>
</section>

<!-- Scroller menu -->

<section class="overlay">
	<div class="overlay-content">
		<div class="overlay-menu">
			<div class="close"><p>x</p></div>
			<ul class="overlay-ul">
				<a href="../"><li>HOME</li></a>
				<a href="all"><li>COURSES</li></a>
				<a href="../contact"><li>CONTACT</li></a>
				<a href="../about"><li>ABOUT</li></a>
				
				<a href="../teach"><li>TEACH</li></a>
			</ul>
		</div>
	</div>
</section>

<!-- Mobile Menu -->


<div class="mymobile">
	<section class="mobile-bar">
		<section class="mobile-bar-container">
			<div class="mobile-bar-content">
				<a href="../"><img src="../img/logowhite.png" width="200" alt="" class="logo"></a>
			</div>
			<div class="clearfix"></div>
		</section>
	</section>
</div>

<div class="mobile-hamburger">
		<img src="../img/hamburger.png" alt="">
</div>

<div class="mobile-menu">
	<div class="mobile-menu-container">
		<div class="mobileul">
			<ul>
				<a href="../"><li>HOME</li></a>
				<a href="all"><li>COURSES</li></a>
				<a href="../contact"><li>CONTACT</li></a>
				<a href="../about"><li>ABOUT</li></a>
				
				<a href="../teach"><li>TEACH</li></a>
			</ul>
		</div>
	</div>
</div>






<body>
