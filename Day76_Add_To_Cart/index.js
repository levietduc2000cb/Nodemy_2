const body = document.querySelector("body");
const items = document.querySelector(".items");
const count = document.querySelector(".count");
const cart = document.querySelector(".cart");
const cartsItem = document.querySelector(".carts-item");
const totalPrice = document.querySelector(".total-price");
const closeCart = document.querySelector(".close-cart");

const ITEMSLIST = [
  {
    name: "Mì 1",
    price: 12000,
    img: "./assets/food_1.png",
  },
  {
    name: "Mì 2",
    price: 12000,
    img: "./assets/food_2.png",
  },
  {
    name: "Mì 3",
    price: 12000,
    img: "./assets/food_3.png",
  },
  {
    name: "Mì 4",
    price: 12000,
    img: "./assets/food_4.png",
  },
  {
    name: "Mì 5",
    price: 12000,
    img: "./assets/food_5.png",
  },
  {
    name: "Mì 6",
    price: 12000,
    img: "./assets/food_6.png",
  },
];

let CartItems = [];

function renderItem() {
  items.innerHTML = "";
  ITEMSLIST.forEach((item, index) => {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `<img src=${item.img} alt="food" />
    <h2>${item.name}</h2>
    <p>${"$" + item.price}</p>
    <button onClick=(addToCart(${index}))>Add to Cart</button>`;
    items.appendChild(newItem);
  });
}

function renderCartItem() {
  cartsItem.innerHTML = "";
  CartItems.forEach((item, index) => {
    const newCartItem = document.createElement("div");
    newCartItem.classList.add("cart-item");
    newCartItem.innerHTML = `<img src="${item.img}" alt="cart-food" />
    <h2>${item.name}</h2>
    <p>${item.price}</p>
    <div>
      <button onClick=(deleteFromCart(${index}))>Xóa</button>
      ${item.count}
      <button onClick=(addAmount(${index}))>Thêm</button>
    </div>`;
    cartsItem.appendChild(newCartItem);
  });
}

cart.addEventListener("click", () => {
  body.classList.toggle("active");
});
closeCart.addEventListener("click", () => {
  body.classList.remove("active");
});

function addToCart(key) {
  let newItemInCart = { ...ITEMSLIST[key], count: 1 };
  let checkItemExist = CartItems.findIndex((item) => {
    return item.name === ITEMSLIST[key].name;
  });
  console.log(checkItemExist);
  if (checkItemExist >= 0) {
    CartItems[checkItemExist].count += 1;
    CartItems[checkItemExist].price =
      ITEMSLIST[key].price * CartItems[checkItemExist].count;
  } else {
    CartItems.push(newItemInCart);
  }
  count.textContent = CartItems.length;
  const newTotalPrice = CartItems.reduce((pre, item) => pre + item.price, 0);
  totalPrice.textContent = "$" + newTotalPrice;
  renderCartItem();
}

function deleteFromCart(key) {
  CartItems.splice(key, 1);
  const newTotalPrice = CartItems.reduce((pre, item) => pre + item.price, 0);
  totalPrice.textContent = "$" + newTotalPrice;
  count.textContent = CartItems.length;
  renderCartItem();
}

function addAmount(key) {
  CartItems[key].count += 1;
  CartItems[key].price = ITEMSLIST[key].price * CartItems[key].count;
  const newTotalPrice = CartItems.reduce((pre, item) => pre + item.price, 0);
  totalPrice.textContent = "$" + newTotalPrice;
  renderCartItem();
}

renderItem();
