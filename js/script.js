$(document).ready(function (){
  $(".parent-dropdown").mouseover(function (){
    $(this).children(".dropdown").toggle();
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
