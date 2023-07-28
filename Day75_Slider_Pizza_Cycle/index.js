const images = document.querySelector(".images");
const btnLeft = document.querySelector(".icon-left");
const btnRight = document.querySelector(".icon-right");
const contentList = document.querySelectorAll(".item-content");

let itemSelect = 0;
let itemsLenght = contentList.length;
let addRoute = 90;
let rotate = 0;

btnRight.addEventListener("click", (e) => {
  itemSelect = itemSelect + 1 > itemsLenght - 1 ? 0 : itemSelect + 1;
  rotate += addRoute;
  contentList.forEach((content) => {
    content.classList.remove("active");
  });
  contentList[itemSelect].classList.add("active");
  images.style.setProperty("--rotate", rotate + "deg");
});
btnLeft.addEventListener("click", (e) => {
  itemSelect = itemSelect - 1 < 0 ? itemsLenght - 1 : itemSelect - 1;
  rotate = addRoute;
  contentList.forEach((content) => {
    content.classList.remove("active");
  });
  contentList[itemSelect].classList.add("active");
  images.style.setProperty("--rotate", rotate + "deg");
});
