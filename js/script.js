new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
})

if (screen && screen.width > 991) {
    document.write('<script type="text/javascript" src="fullpage.js"><\/script>');
}

$(document).ready(function () {
    $('#fullpage').fullpage();
});

// Lấy ra element có id là web-navbar
const navbar = document.getElementById("web-navbar");

// Sự kiện scroll của window
window.addEventListener("scroll", function() {

  // Nếu scroll xuống quá chiều cao của header
  if (window.pageYOffset > header.offsetHeight) {
    
    // Thêm class "sticky" vào navbar
    navbar.classList.add("sticky");
    
  // Ngược lại 
  } else {
    
    // Remove class "sticky" 
    navbar.classList.remove("sticky");
    
  }

});