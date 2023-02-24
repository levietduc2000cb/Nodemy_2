const success = document.querySelector("#success");
const failure = document.querySelector("#failure");
const btn = document.querySelector("button");

function handleCloseAlert() {
  success.style.opacity = 0;
  success.style.bottom = -60 + "px";
  failure.style.opacity = 0;
  failure.style.bottom = -60 + "px";
}

window.addEventListener("offline", (e) => {
  failure.style.opacity = 1;
  failure.style.bottom = 40 + "px";
});

window.addEventListener("online", (e) => {
  success.style.opacity = 1;
  success.style.bottom = 40 + "px";
});
