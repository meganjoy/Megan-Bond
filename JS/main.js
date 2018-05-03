$('li').on('mouseover', function highlight(){ // notice: no arrow function!
  $(this).addClass('highlight')
})
$('li').on('mouseleave', function highlight(){
  $(this).removeClass('highlight')
});


// $('#profile-pic').on('click', () => {
//   $('#hidden-blurb').slideDown(); // only works if #hidden-blurb has display:none; in its CSS
// });

$('#profile-pic').on('click', () => {
  $('#hidden-blurb').fadeIn("slow");
});
