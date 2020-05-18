// To load sea,forest data.
function show_sea_description() {
  $(".sea-load-more").hide();
  $(".sea-env-desc,.sea-btn").fadeIn(3000);
}

function show_forest_description() {
  $(".forest-load-more").hide();
  $(".forest-env-desc").slideDown(2000);
}

$(".sea-btn").click(function () {
  $(".photos").slideDown(1500);
  $(".sea-btn").hide();
});

$(".forest-btn").click(function () {
  $(".videos").slideDown(1500);
  $(".forest-btn").hide();
});

// to get specific image by onclick or call by the above function.
function getImage(index) {
  var slides = document.getElementsByClassName("image-slides");
  var images = document.getElementsByClassName("slider-image");
  var buttons = document.getElementsByClassName("image-dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    buttons[i].classList.remove("active");
  }
  slides[index].style.display = "block";
  images[index].classList.add("animations");
  buttons[index].classList.add("active");
}

function getVideo(index) {
  var slides = document.getElementsByClassName("video-slides");
  var videos = document.getElementsByClassName("slider-video");
  var buttons = document.getElementsByClassName("video-dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    buttons[i].classList.remove("active");
  }
  slides[index].style.display = "block";
  videos[index].classList.add("animations");
  buttons[index].classList.add("active");
}

//scroll up button
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}