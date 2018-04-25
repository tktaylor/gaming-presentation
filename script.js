var slides = document.querySelectorAll('.content .slide');
var currentSlide = 0;

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onClick = function(){
  nextSlide();
}
previous.onClick = function(){
  previousSlide();
}

document.onkeydown = function(e){
  switch (e.keyCode){
    case 37:
      previousSlide();
      break;
    case 39:
      nextSlide();
      break;
  }
};