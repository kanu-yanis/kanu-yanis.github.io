// Particles Background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

// Text Animations
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  const mainContent = document.querySelectorAll("main > section, main > section > h2, main > section > h3, main > section > p, main > section > ul, main > section > div");
  const educationEntries = document.querySelectorAll(".education-entry");
  const experienceEntries = document.querySelectorAll(".experience-entry");
  const skillsGrid = document.querySelector(".skills-grid");
  const skillCategories = document.querySelectorAll(".skill-category");

  if (mainContent.length > 0) {
    gsap.to(mainContent, {
      duration: 1,
      opacity: 1,
      y: -20,
      stagger: 0.2,
      ease: "power2.inOut"
    });
  } else {
    console.warn("Main content elements not found.");
  }

  if (educationEntries.length > 0) {
    educationEntries.forEach((entry, index) => {
      gsap.to(entry, {
        duration: 1,
        opacity: 1,
        y: -20,
        delay: index * 0.2,
        ease: "power2.inOut"
      });
    });
  } else {
    console.warn("Education entry elements not found.");
  }

  if (experienceEntries.length > 0) {
    experienceEntries.forEach((entry, index) => {
      gsap.to(entry, {
        duration: 1,
        opacity: 1,
        y: -20,
        delay: index * 0.2,
        ease: "power2.inOut"
      });
    });
  } else {
    console.warn("Experience entry elements not found.");
  }

  if (skillsGrid) {
    gsap.to(skillsGrid, {
      duration: 1,
      opacity: 1,
      y: -20,
      ease: "power2.inOut"
    });
  } else {
    console.warn("Skills grid element not found.");
  }

  if (skillCategories.length > 0) {
    skillCategories.forEach((category, index) => {
      gsap.to(category, {
        duration: 1,
        opacity: 1,
        y: -20,
        delay: index * 0.2,
        ease: "power2.inOut"
      });
    });
  } else {
    console.warn("Skill category elements not found.");
  }
});