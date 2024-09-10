window.addEventListener("scroll", function() {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
