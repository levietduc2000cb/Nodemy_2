const items = document.querySelectorAll(".item");
document.addEventListener("scroll", () => {
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 150) {
      item.classList.add("active");
      return;
    }
    item.classList.remove("active");
  });
});
