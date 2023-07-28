const body = document.querySelector("body");

const arrSnow = [...Array(60)];
arrSnow.forEach(() => {
  let leftPosition = Math.floor(Math.random() * body.offsetWidth);
  let topPosition = Math.floor(Math.random() * body.offsetHeight);
  let timeDuraton = Math.floor(Math.random() * 4 + 4);
  let imgLink = Math.floor(Math.random() * 3 + 1);
  let blurImg = Math.floor(Math.random() * 10);
  let snowImg = document.createElement("img");
  snowImg.style.left = leftPosition + "px";
  snowImg.style.top = topPosition + "px";
  snowImg.style.animationDuration = timeDuraton + "s";
  snowImg.style.filter = `blur(${blurImg}px)`;
  snowImg.setAttribute("src", `./assets/snow_${imgLink}.png`);
  snowImg.setAttribute("alt", "snow");
  snowImg.classList.add("snow");
  body.appendChild(snowImg);
});
