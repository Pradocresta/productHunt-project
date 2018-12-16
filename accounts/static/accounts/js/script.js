// // URLs images
// var female_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8PcCxh7tT6MDFhJi2UaAT9SeciHqvZuaWtGg0y0-yyP8rMDz";
// var male_img = "https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg";
//
// //On page loaded
// $( document ).ready(function(){
//
//   //set the sex image
//   set_sex_img();
//
//   set_who_message();
//
//   //On change sex input_sex
//   $("#input_sex").change(function(){
//     set_sex_img();
//     set_who_message();
//   });
//
//   $("#first_name").keyup(function() {
//         // Set the "who" message
//         set_who_message();
//     });
//
//     // On change last name input
//     $("#last_name").keyup(function() {
//         // Set the "who" message
//         set_who_message();
//     });
// });
//
// /**
// *   Set image path (Mr. or Ms.)
// */
// function set_sex_img() {
//     var sex = $("#input_sex").val();
//     if (sex == "Select_Gender") {
//         // male
//         $("#img_sex").attr("src", male_img);
//     } else if (sex == "Mr") {
//       $("#img_sex").attr("src", male_img);
//     } else {
//         // female
//         $("#img_sex").attr("src", female_img);
//     }
// }
//
// function set_who_message(){
//   var sex = $("#input_sex").val();
//   var first_name = $("#first_name").val();
//   var last_name = $("#last_name").val();
//
//   if (sex == "Select"){
//     return $("#who_message").text("Who are you ?")
//   } else{
//     return $("#who_message").html(sex+" "+first_name+" "+last_name);
//   }
// }
