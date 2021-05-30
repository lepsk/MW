// To the top 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Nav Bar shrink
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav")
  header.classList.toggle("sticky", window.scrollY > 0)
});

// Song and Tooltip
var Song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function(){
  if(Song.paused){
    Song.play();
    icon.src = "./Assets/Images/pause.png"
    document.getElementById("tooltip-text").innerHTML = "Pause";
  } else {
    Song.pause();
    icon.src = "./Assets/Images/play.png"
    document.getElementById("tooltip-text").innerHTML = "Play";
  }
};

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});

// Parallax on home page
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed')

        const x = (window.innerHeight - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
};

// Cards swipe
$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});

// Images swipe
$(".img-carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});

//Typewriter effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class"wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if(this.isDeleting) { delta /= 2; }

  if(!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function() {
      that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if(toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #fff; }"
  document.body.appendChild(css);
};

// Preloader
$(window).on('load', function () {  
  $(".container").fadeOut("slow");  
});  
