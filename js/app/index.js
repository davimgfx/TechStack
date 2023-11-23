const userMenu = document.querySelector(".menu");
const userLogo = document.querySelector(".user-logo");

userLogo.addEventListener("click", function () {
  userMenu.classList.toggle("none");
});

document.addEventListener("click", function (event) {
  if (!userMenu.contains(event.target) && !userLogo.contains(event.target)) {
    userMenu.classList.add("none");
  }
});
