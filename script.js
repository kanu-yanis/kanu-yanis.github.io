// Initialize particles.js after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded...');
  });
});

// Initialize particles.json
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animations for all main content elements
const mainContent = document.querySelectorAll('main > section');

mainContent.forEach((section) => {
  if (section) {
    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  } else {
    console.warn('Missing main content section');
  }
});

// Fade-in animations for all education entries
const educationEntries = document.querySelectorAll('.education-entry');

educationEntries.forEach((entry) => {
  if (entry) {
    gsap.from(entry, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: entry,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  } else {
    console.warn('Missing education entry');
  }
});

// Fade-in animations for all experience entries
const experienceEntries = document.querySelectorAll('.experience-entry');

experienceEntries.forEach((entry) => {
  if (entry) {
    gsap.from(entry, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: entry,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  } else {
    console.warn('Missing experience entry');
  }
});

// Fade-in animations for all skill categories
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach((category) => {
  if (category) {
    gsap.from(category, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: category,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
    });
  } else {
    console.warn('Missing skill category');
  }
});