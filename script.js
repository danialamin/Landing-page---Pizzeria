const homeMain = document.querySelector(".allcontainer .bg .homeMain");
const menuMain = document.querySelector(".allcontainer .bg .menuMain");
const contactMain = document.querySelector(".allcontainer .bg .contactMain");

const buttonOut = document.querySelector(
  ".allcontainer .bg header div:nth-child(2)"
);
buttonOut.addEventListener("click", function (event) {
  if (event.target.className === "home") {
    homeMain.style.display = "none";
    menuMain.style.display = "none";
    contactMain.style.display = "none";

    event.target.nextElementSibling.classList.remove("active");
    event.target.nextElementSibling.nextElementSibling.classList.remove(
      "active"
    );
    homeMain.style.display = "flex";
    homeMain.style.flexDirection = "column";
    homeMain.style.alignItems = "center";

    event.target.classList.add("active");
  } else if (event.target.className === "menu") {
    homeMain.style.display = "none";
    menuMain.style.display = "none";
    contactMain.style.display = "none";

    event.target.nextElementSibling.classList.remove("active");
    event.target.previousElementSibling.classList.remove("active");

    event.target.classList.add("active");
    menuMain.style.display = "grid";
  } else if (event.target.className === "contact") {
    homeMain.style.display = "none";
    menuMain.style.display = "none";
    contactMain.style.display = "none";

    event.target.previousElementSibling.classList.remove("active");
    event.target.previousElementSibling.previousElementSibling.classList.remove(
      "active"
    );
    contactMain.style.display = "flex";
    contactMain.style.flexDirection = "column";
    contactMain.style.alignItems = "center";

    event.target.classList.add("active");
  }
});
