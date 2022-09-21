const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("active-nav");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((n) =>
  n.addEventListener("click", (e) => {
    hamburger.classList.remove("active-nav");
    navMenu.classList.remove("active-nav");
  })
);

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper_races = new Swiper(".swiper-cards-races", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const slideRight = document.querySelectorAll(".slide-right");
const slideLeft = document.querySelectorAll(".slide-left");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 5;
  slideRight.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
  slideLeft.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
}
