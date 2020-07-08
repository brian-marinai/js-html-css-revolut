$(document).ready(function (){
  $(".parent-dropdown").hover(function (){
    $(this).children(".dropdown").toggleClass("hidden active");
  });
  $(".icon").click(
  function() {
    var active = $(".hamburger-menu").hasClass("active");
    if (active == false) {
      $(".hamburger-menu").addClass("active");
    } else {
      $(".hamburger-menu").removeClass("active");
    }
  }
);
  $(".parent-dropdown-burger").hover(function (){
    $(this).children(".dropdown").toggleClass("hidden active");
  });
});


// $(document).ready(function (){
//   $(".parent-dropdown").mouseover(function (){
//     var active = $(".dropdown").hasClass("hidden");
//     if (active == false) {
//       $(".dropdown").addCLass("hidden");
//     } else {
//       $(".dropdown").removeCLass("hidden");
//
//     }
//     // $(this).children(".dropdown").toggle();
//   });
// });
