<?php session_start(); ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> 
<html lang="en" class="no-js"> <!--<![endif]-->
<head>
  <meta http-equiv="Content-Type" content="charset=utf-8">
  <meta name="Designed By" content="Zander &amp; Norell">
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"/>
  <meta name="HandheldFriendly" content="true"/>  
  <meta name="MobileOptimized" content="320"/>  
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="keywords" content="contact Phonix, contact, mobile development, mobile, mobile friendly, native apps, application, web apps, web app, native app, iOS, Android, mobile device, development, web development, mobile friendly website, intuitive website, design, UX, experts, Zander, Norell">
  <meta name="description" content="Contact Phönix. Web/Mobile Development Experts. Artists. Designers. Developers. What can we do for you?">
	<link href='http://fonts.googleapis.com/css?family=Codystar|Give+You+Glory|Poiret+One|Londrina+Outline|Ovo|Great+Vibes|Julius+Sans+One|Shadows+Into+Light+Two|Megrim' rel='stylesheet' type='text/css'>
    <title>Ph&ouml;nix LLC</title>
    <link rel="stylesheet" type="text/css"
href="css/aboutzn.css"/>
    <!--<link rel="stylesheet" type="text/css"
href="css/contact.css"/>-->
    <style>
        html, body{
            height: 100%
            width: 100%
        }
        #gradient{
            height:100%
            width: 100%
        }
        h3{
            font-family: "Codystar";
            font-size: 150px;
            /*font-size: 11.9vw; */
            color: purple;
            text-align: center;
        }
        h3.home{
            font-family: "Codystar";
            font-size: 150px;
            /*font-size:11.9vw;*/
            color: purple;
            text-align: center;
        }

        h3.home:hover{
            color: red;
        }
        h2 {
            background-color: #5E3333;
            text-align: center;
            color: #E1DFD3;
            border-color: indigo;
            letter-spacing: 2px;
            word-spacing: 2px;
            text-shadow: 2px 2px #ff0000;
            font-size: 80px;
            font-family: 'Great Vibes', cursive;
            padding: 1em;
            margin: -1em -1em 1em -1em;
            margin-bottom: 25px;
        }
        img.mapMpls{
            display: inline-block;
            width: 155px;
            height: auto;
            float: right;
            margin: 10px;
            margin-top: -270px;
            border: 2px solid #CEE1E8;
        }
        #contact-form input.punch:hover{
            color:#FF00FF;
        }

        #contact-form input.punch:active {
            -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
            box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;
            /*margin-top: 58px; */
            position: static;
        }

        #contact-form input.punch {
          background: #bc2c2c;
          border-top: 1px solid #bc2c2c;
          border-right: 1px solid #bc2c2c;
          border-bottom: 1px solid #bc2c2c;
          border-left: 1px solid #bc2c2c;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;
          box-shadow: inset 0 1px 10px 1px #bc2c2c, 0px 1px 0 #bc2c2c, 0 6px 0px #bc2c2c, 0 8px 4px 1px #111111;
          color: #fff;
          font: bold 25px/1 "helvetica neue", helvetica, arial, sans-serif;
          margin-bottom: 10px;
          padding: 10px 0 12px 0;
          text-align: center;
          text-shadow: 0px -1px 1px #bc2c2c;
           -webkit-background-clip: padding-box; 
          /* attempting to get buttons to resize accordingly with screen adjust */
          width: 100%;
          height: auto;
        }

        p{
            font-family: 'Poiret One'; 
            font-size: 16px;
        }
        #contact-form #loading {
          width:32px;
          height:32px;
          background-image:url(../img/loading2.gif);
          display:block;
          position:absolute;
          right:130px;
          bottom:16px;
          display:none;
        }

    </style>
    <script>
        /* home page */

        /* color transitions */
        var colors = new Array(
          [62,35,255],
          [60,255,60],
          [255,35,98],
          [45,175,230],
          [255,0,255],
          [255,128,0]);

        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0,1,2,3];

        //transition speed
        var gradientSpeed = 0.002;

        function updateGradient()
        {
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

         $('#gradient').css({
           background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
            background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
          
          step += gradientSpeed;
          if ( step >= 1 )
          {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            
            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            
          }
        }

        setInterval(updateGradient,10);

    </script>
    <script src="js/libs/modernizr-1.7.min.js"></script>
</head>
<body>
<header style="margin-bottom:-40px;">
        <!-- The nav bar does not connect to other sites as of yet -->
        <nav class="main-nav">
          <ul>
            <li><a href="desktop.html">Home</a></li>
            <li><a href="#" class="drop">Social Media</a>
              <ul>
                <li><a href="#" class="dropp">YouTube</a>
                  <ul>
                    <li><a href="http://www.youtube.com/phonixllc">Phönix</a></li>
                    <li><a href="http://www.youtube.com/virtualwarriorink">Jacob Alexander</a></li>
                    <li><a href="http://www.youtube.com/MaryNorell">Norell</a></li>
                  </ul>
                </li>
                 <li><a href="#" class="dropp">Twitter</a>
                  <ul>
                    <li><a href="http://www.twitter.com/KarnakGallery">Phönix</a></li>
                    <li><a href="http://www.twitter.com/XanderFigueroa">Jacob Alexander</a></li>
                    <li><a href="http://www.twitter.com/MaryNorell">Norell</a></li>
                  </ul>
                </li>
                <li><a href="#" class="dropp">Facebook</a>
                  <ul>
                    <li><a href="http://www.facebook.com/PhonixLLC">Phönix</a></li>
                    <li><a href="http://www.facebook.com/xanderintl">Jacob Alexander</a></li>
                    <li><a href="http://www.facebook.com/MaryNorell">Norell</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <!--<li><a href="#">Support</a></li>-->
            <li><a href="#" class="drop">Affiliates</a>
              <ul>
                <li><a href="#" class="dropp">Organizations</a>
                  <ul>
                    <li><a href="http://www1.umn.edu/twincities/index.html">U of M</a></li>
                    <li><a href="http://www.fullsail.edu">Full Sail University</a></li>
                  </ul>
                </li>
                <li><a href="#" class="dropp">Artists</a>
                  <ul>
                    <li><a href="jcartist.html">Jessica Collette</a></li>
                    <li><a href="http://www.bda.smugmug.com" target="_blank">Johnny Jiron</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
</header>
<div id="gradient">
    <h3 class="home">Ph&ouml;nix</h3>
    <div>
        <div id="contact-form" class="clearfix">
            <div id="content">
                <div id="container">
                    <div id="header"><header><h4 style="font-family: 'Megrim'; font-size:52px; margin-top:20px; text-color: indigo;"><a>Contact Us</a></h4></header> </div><!-- header -->
                
                  <div id="main">
                      <nav>
                          <a href="additem.html" id="addNew" style="display:none;">Go Home?</a>
                      </nav>  
                          <!--<div id="contact-form" class="clearfix">  -->
                            <p>Please fill out the contact form below to get in touch with us! Remember, the more information you provide, the better we will be able to help you with your inquiry.</p>  
                            <?php
                              //init variables
                              $cf = array();
                              $sr = false;
                              
                              if(isset($_SESSION['cf_returndata'])){
                                $cf = $_SESSION['cf_returndata'];
                                $sr = true;
                              }
                            ?>
                            <ul id="errors" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
                              <li id="info">There were some problems with your form submission:</li>
                                <?php 
                                if(isset($cf['errors']) && count($cf['errors']) > 0) :
                                  foreach($cf['errors'] as $error) :
                                ?>
                                <li><?php echo $error ?></li>
                                <?php
                                endforeach;
                                endif;
                                ?>
                            </ul>
                            <p id="success" class="<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">Thanks for your message! We will get back to you ASAP!</p> 

                            <form method="post" action="process.php">   
                              <label for="name">Name: <span class="required">*</span></label>  
                              <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="John Doe" required="required" autofocus="autofocus" />  
                                
                              <label for="email">Email Address: <span class="required">*</span></label>  
                              <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="johndoe@example.com<script type="text/javascript"> 
                              /* <![CDATA[ */ 
                              (function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})(); 
                              /* ]]> */ 
                              </script>" required="required" />  
                                
                              <label for="telephone">Telephone: </label>  
                              <input type="tel" id="telephone" name="telephone" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />  
                                
                              <label for="enquiry">Inquiry: </label>  
                              <select id="enquiry" name="enquiry">  
                                  <option value="General" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'General') ? "selected='selected'" : '' ?>>General Feedback</option>  
                                  <option value="Support" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Support') ? "selected='selected'" : '' ?>>Support</option> 
                                  <option value="Mobile Development" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Mobile Development') ? "selected='selected'" : '' ?>>Mobile Development</option> 
                                  <option value="Body Painting" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Body Painting') ? "selected='selected'" : '' ?>>Body Painting</option>  
                                  <option value="Zander" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Zander') ? "selected='selected'" : '' ?>>Zander</option>  
                                  <option value="Norell" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Norell') ? "selected='selected'" : '' ?>>Norell</option> 
                                  <option value="Other" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Other') ? "selected='selected'" : '' ?>>Other</option>
                              </select>  
                                
                              <label for="message">Message: <span class="required">*</span></label>  
                              <textarea id="message" name="message" placeholder="Your message must be greater than 20 characters." required="required" data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>  
                                
                              <span id="loading"></span>  
                              <input type="submit" value="Submit Inquiry" id="submit-button" />  
                              <p id="req-field-desc"><span class="required">*</span> indicates a required field.</p>   
                            </form> 
                            <?php unset($_SESSION['cf_returndata']); ?>  
                        <!--</div>-->  


                     <!-- Commenting out Adobe Form while attempting php form
                      <form action="#" method="post" id="wishLists">
                          <fieldset>

                              
                         
                              <script type="text/javascript" src="https://formscentral.acrobat.com/Clients/Current/FormsCentral/htmlClient/scripts/adobe.form.embed.min.js"></script>
                              <script type="text/javascript">;ADOBEFORMS.EmbedForm({formId:"wUgY7VQv6YMIVeYb7pzGrg"});</script>

                          </fieldset>

                      </form>
                    -->


                      <!--<p>If you prefer Gmail, please email</p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=zandernorell@gmail.com&su=&body=" target="_blank"><p class="buy" style="font-size:18px; color:indigo; text-decoration:bold;">zandernorell@gmail.com</a></p>-->

                  </div><!-- main -->
                </div><!-- container -->

        </div>  

</div>  


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>
<script src="js/plugins.js"></script>
<script src="js/script.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="js/about.js"></script>
</body>
</html>