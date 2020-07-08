$(document).ready(function (){
  $(".parent-dropdown").hover(function (){
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
