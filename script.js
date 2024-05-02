console.log("ola");

const navMenuToggle = document.getElementById("nav__menu-toggle");
const navMenu = document.querySelector(".nav");

navMenuToggle.addEventListener("click", () => {
  if (navMenuToggle.classList.contains("active")) {
    navMenuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    navMenuToggle.classList.add("active");
    navMenu.classList.add("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 4 || document.documentElement.scrollTop > 4) {
    navMenu.classList.add("scrolled");
  } else {
    navMenu.classList.remove("scrolled");
  }
});
