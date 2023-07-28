const container = document.querySelector(".container");
const listItem = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const bird = document.querySelector(".bird");
const btnNext = document.querySelector(".btn-next");
const btnMore = document.querySelectorAll(".btn-more");
let runTime;
btnNext.onclick = () => {
  bird.classList.add("active-item");
  clearTimeout(runTime);
  runTime = setTimeout(() => {
    bird.classList.remove("active-item");
  }, 3000);
  listItem.appendChild(document.querySelectorAll(".item")[0]);
};
btnMore.forEach((btn) => {
  // btn.addEventListener("mouseover", (e) => {
  //   e.stopPropagation();
  //   bird.classList.remove("fly");
  //   let positionX =
  //     ((e.pageX - container.getBoundingClientRect().left) /
  //       container.offsetWidth) *
  //     100;
  //   let positionY =
  //     ((e.pageY - container.getBoundingClientRect().top) /
  //       container.offsetHeight) *
  //     100;
  //   bird.style.left = `calc(${positionX}% - 330px)`;
  //   bird.style.top = `calc(${positionY}% - 330px`;
  //   bird.style.transform = "rotateY(-180deg) rotate(-60deg)";
  //   // console.log(positionX);
  // });
  // btn.addEventListener("mouseout", (e) => {
  //   bird.style.left = `10%`;
  //   bird.style.top = `50%`;
  //   bird.classList.add("fly");
  // });
  btn.addEventListener("mouseover", (e) => {
    bird.classList.add("fly");
  });
  btn.addEventListener("mouseout", (e) => {
    bird.classList.remove("fly");
  });
});
