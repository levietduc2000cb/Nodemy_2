const menu = document.querySelector(".menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.style.top = event.y + "px";
  menu.style.left = event.x + "px";
  menu.style.display = "block";
});

document.addEventListener("click", (event) => {
  menu.style.display = "none";
});
