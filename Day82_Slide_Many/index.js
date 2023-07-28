const slide = document.querySelector(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
btnLeft.addEventListener("click", () => {
  let count = getComputedStyle(slide).getPropertyValue("--count");
  let items = document.querySelectorAll(".item");
  for (let i = 0; i < count; i++) {
    slide.appendChild(items[i]);
  }
});
btnRight.addEventListener("click", () => {
  let count = getComputedStyle(slide).getPropertyValue("--count");
  let items = document.querySelectorAll(".item");
  for (let i = 1; i <= count; i++) {
    slide.prepend(items[items.length - i]);
  }
});
// console.log(slide.style.getProperty("--count"));
