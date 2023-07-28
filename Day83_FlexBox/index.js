const container = document.querySelector(".container");

const listItems = [
  "./assets/anime_1.jpg",
  "./assets/anime_2.jpg",
  "./assets/anime_3.jpg",
  "./assets/anime_4.jpg",
  "./assets/anime_5.jpg",
];

let indexCenter = Math.floor((listItems.length - 1) / 2);
console.log({ indexCenter });

const renderLi = () => {
  container.innerHTML = "";
  listItems.forEach((imgSrc, index) => {
    let liElement = document.createElement("li");
    let image = document.createElement("img");
    if (index === indexCenter) {
      liElement.classList.add("active");
    }
    liElement.onclick = () => {
      handleSelectImg(index);
    };
    image.src = imgSrc;
    liElement.appendChild(image);
    container.appendChild(liElement);
  });
};

const handleSelectImg = (index) => {
  let tem = listItems[indexCenter];
  listItems[indexCenter] = listItems[index];
  listItems[index] = tem;
  renderLi();
};

renderLi();
