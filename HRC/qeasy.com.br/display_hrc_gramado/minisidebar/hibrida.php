
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png">
    <title>HARD ROCK CAFE | DISPLAY | QEASY</title>
    <!-- Bootstrap Core CSS -->
    <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
    <!-- You can change the theme colors from here -->
    <link href="css/colors/default-dark.css" id="theme" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">


<style>

body{
	overflow:hidden;
	cursor:none;
    background: #000;
}

#left_display{
	display:block;
	position:absolute;
	left:0;
	top:0;
}

.logo-hrc{
    margin-top: -100px;
    position: relative;
}

#left_display #display_senhas{
	padding-top:50px;
}



.h3_senhas{ font-size:85px; line-height: 100%;}

#left_display #display_senhas p{ font-size:30px; line-height:120%;}


#logo-hrc-toten{
	margin-top: 30px;
	margin-left:30px;
}
.qeasy{
    background:url(../assets/images/logo-t-small.png) bottom center no-repeat;
    display:block;
    width:53px;
    height:20px;
    z-index:100;
    position: fixed;
    bottom: 10px;
    right: 10px;
}

.mail-contnet h3{
	height:auto;
	line-height:95%;
    font-size: 18px;
}
.mail-contnet .time {
    font-size: 14px;
    padding: 0;
}


.login-box{
	width:500px;
}

.fique_atento{
	font-size:30px;
}
* { cursor:none !important;   }
.video-background {
    background: #000;
    position: fixed;
    z-index: 100;
    width: 930px;
    height: 500px;
}
.login-box{
    position: relative;
    top: 0;
    right: 0;
    z-index: 200;
}
.video-foreground,
.video-background iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: #000;
}

.video-foreground { height: 300%; top: -100%;  background-color: #000; }

#chamasenha{
    width: 930px;
    height: 350px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 500;

}

.p-t-60{
    padding-top: 40px;

}

.frase_recepcao{
    font-size: 30px;
    color: #FFF;
}




</style>
</head>

<body>

<input type="hidden" id="display" value="" />
   
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>
  
<section id="wrapper" class="login-register login-sidebar"  style="background-image:url(../assets/images/hrcblack2.jpg);">
  <div class="login-box no-padding ">
    <div class="card-block no-padding">

        <div class="col-md-12 col-12 no-padding text-center">
             <img id="logo-hrc-toten"  src="../assets/images/logo-hrc-display-black.png"  class="animated tada logo-hrc"  />
             <h1 class="fique_atento text-white m-t-20">FIQUE ATENTO, ESTÁ QUASE!</h1>
         </div>

         <div class="message-box">
            <div  class="message-widget  text-white ">
                <div id="load_display_proximos" class="row p-t-10">

                </div>
            </div>
         </div>

    </div>
  </div>
</section>



<section id="left_display">
 <div class="video-background " style="background: #FFF; display: block;">
        <div class="video-foreground">

             <iframe src="https://www.youtube.com/embed/HepMtapWyvI?controls=0&showinfo=0&rel=0&autoplay=1&sound=0&modestbranding=1&mute=1&loop=1&playlist=7b36syG7wqM,09Z17JO2csQ" frameborder="0" allowfullscreen></iframe>        </div>
    </div>
    
    <div id="chamasenha" class="text-center">



    </div>





</section>
<section class="qeasy"></section>



    <script src="../assets/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="../assets/plugins/bootstrap/js/tether.min.js"></script>
    <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="js/jquery.slimscroll.js"></script>
    <!--Wave Effects -->
    <script src="js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="js/sidebarmenu.js"></script>
    <!--stickey kit -->
    <script src="../assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
    <!--Custom JavaScript -->
    <script src="js/custom.min.js"></script>
    <!-- ============================================================== -->
    <!-- Style switcher -->
    <!-- ============================================================== -->
    <script src="../assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>
    
    <script>
		
		 jQuery(document).ready(function() {
		


         function load_display_proximos(){
             $('#load_display_proximos').load('load_display_proximos_hibrida.php');
         }

         load_display_proximos();

         (function ajaxpolling_proximos() {
             $.getJSON('ajax-display.php?acao=ajax_reflash_proximos', function(j){
                 if(j[0].status == "1"){
                     load_display_proximos();
                 }
                 setTimeout(ajaxpolling_proximos, 2000);
             });
         }());

		  
		  function load_mostra_senhas(){
		      $('#chamasenha').load('load_mostra_senha_hibrida.php');
		  }

		  load_mostra_senhas();

		  (function ajaxpolling_notificacoes() {
             $.getJSON('ajax-display.php?acao=ajax_reflash_senhas_1', function(j){
                 if(j[0].status == "1"){
                     load_mostra_senhas();
                 }

                 setTimeout(ajaxpolling_notificacoes, 2000);
             });
         }());

         (function ajaxpolling_reflash_display() {
             $.getJSON('ajax-display.php?acao=ajax_reflash_dsiplay', function(j){
                 for (var i = 0; i < j.length; i++) {
                     status = j[i].status;
                     iframe = j[i].iframe;
                     if(status == "1"){
                         $('.video-foreground').html(iframe);
                     }
                 }
                 setTimeout(ajaxpolling_reflash_display, 2000);
             });
         }());


		

		  
        $('.carousel').carousel({ interval: 3500});
		addEventListener("click", function() {
            var
                  el = document.documentElement
                , rfs =
                       el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
            ;
            rfs.call(el);
        });
			
});
	</script>
</body>

</html>