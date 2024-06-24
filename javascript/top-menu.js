const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const subjectMenuIcon = document.querySelector("#subject-menu-icon");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  subjectMenuIcon.classList.toggle("subject-menu-icon-active");
});
