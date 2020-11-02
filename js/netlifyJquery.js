// $("#contactform").submit(function(e) {
//     e.preventDefault();
  
//     var $form = $(this);
//     $.post($form.attr("action"), $form.serialize()).then(function() {
//         $('#registration').modal('show');
//         function(){
//             window.location.href = "success.html";
//         }
//     });
//   });

  $(document).ready(function(){
    $('#contactform').submit(function(e) {
     var postData = $(this).serializeArray();
     var formURL = $(this).attr("action");
     $.ajax({
         url: formURL,
         type: "POST",
         data: postData,
         success: function(data) {
         console.log('success!')
       }
     });
     e.preventDefault(); //STOP default action
 });
 });