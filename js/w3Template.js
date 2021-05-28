$(function () {
    var mySidebar = $('#mySidebar');
    var overlayBg = $('#myOverlay');
    $('.fa-bars').click(function () {
        mySidebar.show();
        overlayBg.show();
    });
    $('.fa-remove, #myOverlay').click(function () {
        mySidebar.hide();
        overlayBg.hide();
    });
});


// Get the Sidebar
// var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
// var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
// function w3_open() {
//   if (mySidebar.style.display === 'block') {
//     mySidebar.style.display = 'none';
//     overlayBg.style.display = "none";
//   } else {
//     mySidebar.style.display = 'block';
//     overlayBg.style.display = "block";
//   }
// }

// Close the sidebar with the close button
// function w3_close() {
//   mySidebar.style.display = "none";
//   overlayBg.style.display = "none";
// }
