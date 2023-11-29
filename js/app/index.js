// Navbar
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


// By the select
const select = document.getElementById("select");

select.addEventListener("change", function () {
  const selectedTags = select.value.toLowerCase().split(',').map(tag => tag.trim());

  const articles = document.querySelectorAll(".article");

  articles.forEach(function (article) {
    const articleTags = article.getAttribute("data-tags").toLowerCase().split(',').map(tag => tag.trim());

    if (selectedTags.length === 0 || selectedTags.some(tag => articleTags.includes(tag))) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});



// Show just principals
document.addEventListener('DOMContentLoaded', function () {
  const principalArticlesButton = document.querySelector('.articles');

  principalArticlesButton.addEventListener('click', function () {

    const articles = document.querySelectorAll('.article');

   
    articles.forEach(function (article) {
     
      if (article.getAttribute('type') === 'principal') {
       
        article.style.display = 'block';
      } else {
        
        article.style.display = 'none';
      }
    });
  });
});


// Show all articles
const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function () {
  const articles = document.querySelectorAll('.article');

  articles.forEach(function (article) {
    article.style.display = 'block';
  });
});