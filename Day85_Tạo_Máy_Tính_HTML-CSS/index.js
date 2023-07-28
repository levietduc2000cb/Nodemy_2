const listBtn = document.querySelectorAll("button");
const preNumber = document.querySelector(".pre-number");
const newNumber = document.querySelector(".new-number");

const LIST_NUMBER = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let currentNumber = "";
let oldNumber = "";
let caculation = "";

listBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        currentNumber = "";
        oldNumber = "";
        caculation = "";
        break;
      case "+/-":
        currentNumber = Number(currentNumber) * -1;
        break;
      case "%":
        if (oldNumber && currentNumber) {
          handleCaculation();
        }
        oldNumber = currentNumber;
        currentNumber = "";
        caculation = "%";
        break;
      case "/":
        if (oldNumber && currentNumber) {
          handleCaculation();
        }
        oldNumber = currentNumber;
        currentNumber = "";
        caculation = "/";
        break;
      case "x":
        if (oldNumber && currentNumber) {
          handleCaculation();
        }
        oldNumber = currentNumber;
        currentNumber = "";
        caculation = "x";
        break;
      case "-":
        if (oldNumber && currentNumber) {
          handleCaculation();
        }
        oldNumber = currentNumber;
        currentNumber = "";
        caculation = "-";
        break;
      case "+":
        if (oldNumber && currentNumber) {
          handleCaculation();
        }
        oldNumber = currentNumber;
        currentNumber = "";
        caculation = "+";
        break;
      case "=":
        handleCaculation();
        oldNumber = "";
        caculation = "";
        break;
      default:
        currentNumber = String(currentNumber) + e.target.innerText;
        break;
    }
    render();
  });
});

const handleCaculation = () => {
  switch (caculation) {
    case "%":
      currentNumber = parseFloat(
        (Number(oldNumber) % Number(currentNumber)).toFixed(2)
      );
      break;
    case "/":
      currentNumber = parseFloat(
        (Number(oldNumber) / Number(currentNumber)).toFixed(2)
      );
      break;
    case "x":
      currentNumber = parseFloat(
        (Number(oldNumber) * Number(currentNumber)).toFixed(2)
      );
      break;
    case "-":
      currentNumber = parseFloat(
        (Number(oldNumber) - Number(currentNumber)).toFixed(2)
      );
      break;
    case "+":
      currentNumber = parseFloat(
        (Number(oldNumber) + Number(currentNumber)).toFixed(2)
      );
      break;
    default:
      return;
  }
};

const render = () => {
  preNumber.innerText = oldNumber + caculation;
  newNumber.innerText = currentNumber;
};
