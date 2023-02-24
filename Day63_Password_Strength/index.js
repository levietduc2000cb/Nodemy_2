const password = document.querySelector("#password");
const powerPercent = document.querySelector(".power-percent");
let point = 0;
let value = "";
const listColors = ["#C90002", "#152C81", "#018944", "#CB8001", "#3B9B1B"];
const listPercent = ["1%", "25%", "50%", "75%", "100%"];
const listValidation = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
password.oninput = (e) => {
  point = 0;
  value = e.target.value;
  if (value.length > 6) {
    for (const valid of listValidation) {
      if (valid.test(value)) {
        point += 1;
      }
    }
  }
  powerPercent.style.width = listPercent[point];
  powerPercent.style.backgroundColor = listColors[point];
};
