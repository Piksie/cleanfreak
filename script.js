const navMenuToggle = document.getElementById("nav__menu-toggle");
const navMenu = document.querySelector(".nav");
const featureCardCTAs = document.querySelectorAll(".feature__cta");
const contactForm = document.getElementById("contact__form");
const formFeatureSelect = document.getElementById("plans");

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

featureCardCTAs.forEach((cta) => {
  cta.addEventListener("click", (event) => {
    event.preventDefault();
    const navHeight = navMenu.clientHeight;
    const selectedOption = cta.parentElement.dataset.option;
    formFeatureSelect.value = selectedOption;
    const scrollPosition = contactForm.offsetTop - navHeight;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    formFeatureSelect.focus({ preventScroll: true });
    formFeatureSelect.classList.add("focused");
    setTimeout(() => {
      formFeatureSelect.classList.remove("focused");
    }, 3000);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const navHeight = navMenu.clientHeight;
    const selectedElement = document.getElementById((this.getAttribute("href")).substring(1));
    const scrollPosition = selectedElement.offsetTop - navHeight;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  });
});
