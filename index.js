const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navLinks.classList.toggle("is-active");
});
