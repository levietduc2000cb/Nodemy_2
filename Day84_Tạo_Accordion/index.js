const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-angle-down")) {
      item.classList.toggle("active");
    }
  });
});
