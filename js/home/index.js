document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const items = document.querySelector(".items");
  
    mobileMenu.addEventListener("click", function () {
      items.classList.toggle("deactivate");
    });
  });