const listNav = document.querySelector(".list-nav");
const items = document.querySelectorAll(".item");
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 70) {
    listNav.classList.add("list-nav-fixed");
  } else {
    listNav.classList.remove("list-nav-fixed");
  }
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    }
  });
});
