// Make it rain!
$('.blog_gallery').slick( {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// Nav Bar / Hamburger //
// When Hamburger Nav appears
  // if user clicks on Hamburger
    // drop down menu slides down
  //if user clicks on hamburger again
    // drop down menu slides up

// $('.hamburger').on('click', function(event) {
//   console.log('hello');
//   event.preventDefault();
//   $('.hamburger').toggleClass('menu');
//   $('.menu_content').slideIn('slow');
// });


// $( '.menu-btn' ).click(function(){
// $('.responsive-menu').addClass('expand')
// $('.menu-btn').addClass('btn-none')
// })
//
// $( '.close-btn' ).click(function(){
// $('.responsive-menu').removeClass('expand')
// $('.menu-btn').removeClass('btn-none')
// })

// slideToggle ^
// forget the hamburger!!
// $(window).on('scroll', function () {
// 	var distanceScrolled = $(window).scrollTop();
// if (distanceScrolled >= 50) {
//     $('.nav').addClass('scrolled');
// }  else {
//     $('.nav').removeClass('scrolled');
// }
// apparently the scroll funtion breaks the carousel :(
// HOME PAGE //
/*
*******************************************************
ADVOX LOGO - large - center of page on load
  // If user scrolls past 50
    //logo decreases in size and lands in upper left hand corner of header
*******************************************************

*******************************************************
******************************************************* */



/********************************************************
Instagram feed (carousel)
    //If user clicks > (arrow)
      //next group of photos slides in from L to R
    //else if user clicks < (arrow)
      //next group of photos slides in from R to L
*******************************************************


*/

// GALLERY // carousel
// $('.gallerycontainer').on('click', function(){
//   $('.gallerycontainer').addClass('.blog_gallery')
// });
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var ModalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function (){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

/*
*******************************************************
  // If user hovers over image
    //image fades and info (location, date, etc.) fades in
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

// BLOG //
/*
load_more button
when user clicks on load_more button
load next 3 blog Posts
*/

// CONTACT /
// $('input').val();

$('#contactform').on('submit',function(event){
  event.preventDefault();

  var fullname = $('#fullname').val();
  var email = $('#email').val();
  var message = $('#message').val();

  if (!full-name) {
    $('#fullname').addClass('warn');
    $('#fullname').next('.warning').show();
  } else {
    $('#fullname').removeClass('warn');
    $('#fullname').next('.warning').hide();
  }

  if (!email) {
    $('#email').addClass('warn');
    $('#email').next('.warning').show();
  } else {
    $('#email').removeClass('warn');
    $('#email').next('.warning').hide();
  }

  if (!message) {
    $('#message').addClass('warn');
    $('#message').next('.warning').show();
  } else {
    $('#message').removeClass('warn');
    $('#message').next('.warning').hide();
  }
});

// Back to top button//////////////////
// when user scrolls past 50, back to top button appears
// when user scrolls back up, back to top button disappears

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// When the user clicks on the button, scroll to the top of the document
