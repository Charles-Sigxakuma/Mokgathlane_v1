const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".skills-section", {
  ...scrollRevealOption,
  origin: "top",
  delay: 1000,  
 

});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,

  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  origin: "right",
  delay: 20,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  origin: "top",
  delay: 200,
});


ScrollReveal().reveal(".subheading", {
  ...scrollRevealOption,
  origin: "left",
  delay: 150,
  
});
ScrollReveal().reveal(".subheading .span", {
  ...scrollRevealOption,
  origin: "right",
  delay: 150,
  
});

ScrollReveal().reveal(".values_subheader", {
  ...scrollRevealOption,
  origin: "left",
  delay: 900,
  
});
ScrollReveal().reveal(".values_subheader", {
  ...scrollRevealOption,
  origin: "left",
  delay: 900,
  
  
});

ScrollReveal().reveal(".quote-heading", {
  ...scrollRevealOption,
  origin: "right",
  delay: 900,
  
  
});

ScrollReveal().reveal(".vertical-bar", {
  ...scrollRevealOption,
  origin: "left",
  delay: 900,
  
  
});





// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 100,
  origin: "right",
});
function animateCounter(element) {
  const start = parseInt(element.getAttribute('data-start'))||1;
  const stop = parseInt(element.getAttribute('data-stop'))||10;
  const step = parseFloat(element.getAttribute('data-step')) ||0;
  const duration = parseInt(element.getAttribute('data-duration')) || 5000;

  let current = start;
  const totalSteps = Math.ceil((stop - start) / step);
  const interval = duration / totalSteps;

  function updateCounter() {
    current += step;
    if (current >= stop) {
      element.textContent = stop;
      return;
    }
    element.textContent = Math.round(current);
    setTimeout(updateCounter, interval);
  }

  updateCounter();
}

document.addEventListener('DOMContentLoaded', function() {
  
  animateCounter(document.getElementById('years-experience-counter'));
});
///pop up
function togglePopup() {
  const popup = document.getElementById('contact-popup');
  popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

// Close the popup if clicked outside the popup content
window.onclick = function(event) {
  const popup = document.getElementById('contact-popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
}




