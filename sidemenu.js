const menuBtn = document.querySelector(".js-menuBarBtn"),
  sideMenu = document.querySelector(".js-sideMenu"),
  sideMenuNone = document.querySelector(".sideMenu__none");

function hideSideMenu() {
  console.log("clicked");
  sideMenu.classList.remove("flex");
}

function appearSideMenu() {
  console.log("clicked");
  sideMenu.classList.add("flex");
}

function init() {
  menuBtn.addEventListener("click", appearSideMenu);
  sideMenuNone.addEventListener("click", hideSideMenu);
}

init();
