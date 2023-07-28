const listDot = document.querySelector(".list-dot");

console.log(listDot);

const ARRAY = [...Array(30)];
const createDot = () => {
  listDot.innerHTML = "";
  ARRAY.forEach(() => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = Math.floor(Math.random() * 100) + "%";
    dot.style.top = Math.floor(Math.random() * 100) + "%";
    listDot.appendChild(dot);
  });
};
setInterval(createDot, 1000);
