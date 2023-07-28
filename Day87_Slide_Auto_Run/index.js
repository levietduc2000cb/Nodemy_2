const listItem = document.querySelector(".slide .list-item");
const items = document.querySelectorAll(".slide .list-item li");
const dots = document.querySelectorAll(".slide .btn-select li");
const btnLeft = document.querySelector(".slide .btn-control .btn-left");
const btnRight = document.querySelector(".slide .btn-control .btn-right");

let preActive = 0;
let active = 0;

btnLeft.addEventListener("click", (e) => {
  active = active === 0 ? items.length - 1 : active - 1;
  handleSlide();
  preActive = active;
});

btnRight.addEventListener("click", (e) => {
  active = active === items.length - 1 ? 0 : active + 1;
  handleSlide();
  preActive = active;
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    active = index;
    handleSlide();
    preActive = active;
  });
});

let runSlide = setInterval(() => {
  btnRight.click();
}, 2000);

const handleSlide = () => {
  listItem.style.left = -items[active].offsetLeft + "px";
  dots[preActive].classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(runSlide);
  runSlide = setInterval(() => {
    btnRight.click();
  }, 2000);
};
