// Make it rain!


// Nav Bar / Hamburger //
// When Hamburger Nav appears
  // if user clicks on Hamburger
    // drop down menu slides down
  //if user clicks on hamburger again
    // drop down menu slides up

$('.hamburger').on('click', function () {
  $('.hamburger').toggleClass('menu');
  $('.hamburger').toggleClass('menu-content');
});


// HOME PAGE //
/*
*******************************************************
ADVOX LOGO - large - center of page on load
  // If user scrolls past 50
    //logo decreases in size and lands in upper left hand corner of header
*******************************************************

*******************************************************
Social Media Icons
  // If user mouseEnter over SM Icons
    //Icon increases in size
  //When user mouseLeave
    //Icon decreases to original size
******************************************************* */
$('.fa').mouseenter(function() {
  $('.fa').toggleClass('bigger');
});

// $('.fa').mouseleave(function() {
//   $('.fa').removeClass('bigger');
// }

/********************************************************
Instagram feed (carousel)
    //If user clicks > (arrow)
      //next group of photos slides in from L to R
    //else if user clicks < (arrow)
      //next group of photos slides in from R to L
*******************************************************


*/

// GALLERY // carousel
/*
*******************************************************
  // If user hovers over image
    //image darkens and info (location, date, etc.) fades in
  // If user leaves images
      //image returns to normal and info fades out

  // When user clicks on images
    //image fades in + increases in size
    //if user clicks R arrow
      //photo fades out and next photo fades in
    //else if user clicks L arrow
      //photo fades out and previous photo fades in

      ** .close from sidebar exercise **
      ** each image should be linked to it's blog post **
*******************************************************
*/

// ABOUT US //
/*

*/

// BUILDS //
/*

*/

// CONTACT //
/*

*/
