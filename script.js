const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".menu-hamburger");
const itemsList = document.querySelector(".items-list ");

/*STICKY NAVBAR*/
window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.clientHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/*HAMBURGER MENU - OPEN/CLOSE*/
hamburgerMenu.addEventListener("click", () => {
  itemsList.classList.toggle("active");
});
