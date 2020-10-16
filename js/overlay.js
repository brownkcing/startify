//Get url m0dal

const url = window.location.href;
const overlaymsg = document.getElementById("success");
if(url.search ("success") > 0 ) {
    overlaymsg.style.display = "block";
};



// var url = window.location.href;
// // Get DIV
// var msg = document.getElementById('success');
// // Check if URL contains the keyword
// if( url.search( 'success' ) > 0 ) {
//   // Display the message
//   msg.style.display = "block";
// }