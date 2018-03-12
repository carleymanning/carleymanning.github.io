/* Dropdown Menu
  When user clicks on dropdown Menu
  // drop down menu slides down
  When user clicks button again
  // drop down slides back up
*/
$('#openDropdown').on('click', function(){
  $('#dropdownMenu').slideToggle();
});
// the dropdown is visible when i load the page

/* FAQs
  When user clicks on hours button
  // button slides up to reveal hours
  // button turns from gray to yellow
  When user clicks reach button
  // button slides up to cover hours and reveal contact info
  // button turns from gray to yellow
*/

$('#question2').on('click', function(){
  $('#question2').toggleClass('faqs li active');
  // $('#question2').slideUp(300);
  $('#answer2').show();
  $('#answer1').hide();
});

$('#question1').on('click', function(){
  $('#question1').toggleClass('faqs li active');
  $('#answer1').show();
  $('#answer2').hide();
});


// $('#question2').on('click', function(){
//   $('#answer2').show(answer2);
// });
//
// $('#question2').on('click', function(){
//   $('#answer2').hide(answer2);
//   $('#question2').addClass('faqs');
// });

/* Show Yellow / Blue
  When user clicks on Show Yellow button
  // circles fade yellow
  When user clicks on Show blue button
  // circles fade blue
*/
$('#showYellowCircles').on('click', function(){
  $('.blue').addClass('yellow');
  $('.blue').removeClass('blue');
});

$('#showBlueCircles').on('click', function(){
  $('.yellow').addClass('blue');
  $('.yellow').removeClass('yellow');
});
