
// Animation- Image appears onto screen- disappears once off screen
ScrollReveal().reveal('.appearance', {
  duration: 2500,
  reset: true
});

// Animation- Image appears onto screen
ScrollReveal().reveal('.appearanceStay', {
  duration: 2000,
});

// Animation- Image moves to position from bottom of screen (2.7s)
ScrollReveal().reveal('.bottomDelay1', {
  duration: 2700,
  origin: 'bottom',
  distance: '150px',
});

// Animation- Image moves to position from bottom of screen (3.7s)
ScrollReveal().reveal('.bottomDelay2', {
  duration: 3700,
  origin: 'bottom',
  distance: '150px',
});

// Animation- Image moves to position from bottom of screen (3.9s)
ScrollReveal().reveal('.bottomDelay3', {
  duration: 3900,
  origin: 'bottom',
  distance: '130px',
});

// Animation- Image moves to position from bottom of screen (4s)
ScrollReveal().reveal('.bottomDelay4', {
  duration: 4000,
  origin: 'bottom',
  distance: '130px',
});

// Animation- Image moves to position from left of screen (2s)- disappears once off screen
ScrollReveal().reveal('.appearanceLeft', {
  duration: 2000,
  origin: 'left',
  distance: '50px',
  reset: true
});

// Animation- Image moves to position from right of screen (2s)- disappears once off screen
ScrollReveal().reveal('.appearanceRight', {
  duration: 2000,
  origin: 'right',
  distance: '50px',
  reset: true
});

// Animation- Image moves to position from left of screen (2s)
ScrollReveal().reveal('.appearanceLogoLeft', {
  duration: 2000,
  origin: 'left',
  distance: '50px'
});

// Animation- Image moves to position from right of screen (2s)
ScrollReveal().reveal('.appearanceLogoRight', {
  duration: 2000,
  origin: 'right',
  distance: '50px'
});

// Animation- Image moves to position from left of screen (4s)
ScrollReveal().reveal('.leftDelay', {
  duration: 4000,
  origin: 'left',
  distance: '130px',
});

// Animation- Image moves to position from right of screen (4s)
ScrollReveal().reveal('.rightDelay', {
  duration: 4000,
  origin: 'right',
  distance: '130px'
});

// Animation- Image moves to position from bottom of screen with reset (3s)
ScrollReveal().reveal('.bottomDelayReset', {
  duration: 3000,
  origin: 'bottom',
  distance: '130px',
  reset: true
});

// Animation- Image moves to position from right of screen (4s)
ScrollReveal().reveal('.leftDelayReset', {
  duration: 2000,
  origin: 'left',
  distance: '130px',
  reset: true
});

// Animation- Image moves to position from right of screen with reset (4s)
ScrollReveal().reveal('.rightDelayReset', {
  duration: 4000,
  origin: 'right',
  distance: '130px',
  reset: true
});

// Animation- Image moves to position from right of screen with reset (4s)
ScrollReveal().reveal('.largeLeftReset', {
  duration: 1000,
  origin: 'left',
  distance: '5000px',
  reset: true
});

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

$('.navbar-nav .nav-link highlight').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
