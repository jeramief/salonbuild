const navbar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector('#close-navbar');

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  navbar.classList.remove("active");
}))
