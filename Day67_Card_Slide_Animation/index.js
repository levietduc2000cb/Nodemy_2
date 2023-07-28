const card = document.querySelectorAll(".card");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let active = 2;

function loadingArtice() {
  card[active].style.transform =
    "translateX(-50%) perspective(11px) rotateY(0) scale(1)";
  card[active].style.opacity = "1";
  card[active].style.filter = "unset";
  card[active].style.cursor = "pointer";
  card[active].style.zIndex = "2";
  for (let index = active + 1; index <= card.length - 1; index++) {
    card[index].style.transform = `translateX(${
      (index - (active + 1)) * 50
    }%) perspective(11px) rotateY(-1deg) scale(${
      0.9 - 0.1 * (index - active)
    })`;
    card[index].style.opacity = "0.7";
    card[index].style.filter = "blur(2px)";
    card[index].style.cursor = "default";
    card[index].style.zIndex = "1";
  }
  for (let index = active - 1; index >= 0; index--) {
    card[index].style.transform = `translateX(${
      (active - index) * -50 - 50
    }%) perspective(11px) rotateY(1deg) scale(${0.9 - 0.1 * (active - index)})`;
    card[index].style.opacity = "0.7";
    card[index].style.filter = "blur(2px)";
    card[index].style.cursor = "default";
    card[index].style.zIndex = "1";
  }
}

btnLeft.onclick = () => {
  active = active - 1 < 0 ? active : active - 1;
  loadingArtice();
};
btnRight.onclick = () => {
  active = active + 1 > card.length - 1 ? active : active + 1;
  loadingArtice();
};

loadingArtice();
