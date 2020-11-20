let mainNav = document.querySelector('.main-nav');
let navBarToggle = document.querySelector('.navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});



window.onscroll = function() {stickTop()};

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function stickTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



$(document).ready(function() {
  let scroll_start = 0;
  let startchange = $('.bg-image-1');
  let offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar").css('height', '60px');
        $(".logo").css('transform', 'scale(0.4)');
      } else {
        $('.navbar').css('height', '152px');
        $(".logo").css('transform', '');
      }
    });
  }
});



function checkDate() {
  let selectedText = document.getElementById('datepicker').value;
  let selectedDate = new Date(selectedText);
  let now = new Date();
  if (selectedDate < now) {
   alert("UYARI: Geçmiş bir tarih seçtiniz. Lütfen seçiminizi kontrol ediniz.");
  }
}