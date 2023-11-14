$( document ).ready(function() {
  
  /* Set variables  */
  var in_transition = false; // set in_transition back to false at the end of your transition.

  // toggle dropdown on mouse hover, click and tap events
  $('.dropdown').on('mouseenter mouseleave click tap touchstart', function(event) {
    /* We check if we are not in responsive mode by default .navbar-toggle is only visible in 768px and less aak mobile responsive mode. */
    if (!$('.navbar-toggle').is(':visible')) {
      /* We ensure no other animation is runnning first */
      if( in_transition == false ){
        /*Set in transition to true to ensure only one animation at a time*/
        in_transition = true;
        
      /* Toggle dropdown open/ close  */
      $(this).dropdown('toggle');
        
        // Do your animation here and upon it's completion set in_transition back to false.
        in_transition = false;
        
      }
    }
  });
  //https://getbootstrap.com/javascript/#dropdowns
});
