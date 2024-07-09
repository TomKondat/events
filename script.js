const rootEl = document.getElementById("root");
const searchForm = document.querySelector("header div:nth-child(2) form");
const inputSearch = document.getElementById("inputSearch");
const sortedPrice = document.getElementById("sort");
const open_modal_btn = document.getElementById("open-modal1");
const close_btn = document.querySelector(".modal-class-btn");

const products = [
  {
    id: "1",
    cat: "food",
    name: "Milk",
    price: "6",
    image:
      "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_150.jpg",
  },
  {
    id: "2",
    cat: "food",
    name: "Bread",
    price: "8",
    image:
      "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_150.jpg",
  },
  {
    id: "4",
    cat: "food",
    name: "Eggs",
    price: "12",
    image: "https://cdn.pixabay.com/photo/2015/09/17/17/19/egg-944495_150.jpg",
  },
  {
    id: "3",
    cat: "clothing",
    name: "Coat",
    price: "120",
    image:
      "https://cdn.pixabay.com/photo/2015/05/29/19/19/person-789663_150.jpg",
  },
  {
    id: "5",
    cat: "clothing",
    name: "Dress",
    price: "4000",
    image:
      "https://cdn.pixabay.com/photo/2016/06/29/04/17/wedding-dresses-1485984_150.jpg",
  },
  {
    id: "6",
    cat: "clothing",
    name: "Shirt",
    price: "70",
    image:
      "https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_150.jpg",
  },
  {
    id: "7",
    cat: "animals",
    name: "Dog food",
    price: "70",
    image: "https://cdn.pixabay.com/photo/2017/04/07/10/53/dog-2210717_150.jpg",
  },
  {
    id: "8",
    cat: "animals",
    name: "Cat toy",
    price: "50",
    image: "https://cdn.pixabay.com/photo/2018/07/21/09/17/cat-3552143_150.jpg",
  },
];
let filteredArr = [...products];
let shoppingCart = [];

const handleAddToCart = (e) => {
  const id = e.target.id;
  //update quantity
  let alreadyInCart = false;
  shoppingCart = shoppingCart.map((product) => {
    if (product.id === id) {
      product.quantity++;
      alreadyInCart = true;
    }
    return product;
  });
  if (alreadyInCart) {
    // console.log(shoppingCart);
    return;
  }
  //fint if exsist
  const product = products.find((product) => product.id === id);
  const cartProduct = { ...product };
  cartProduct.quantity = 1;
  shoppingCart.push(cartProduct);
  console.log(shoppingCart);
};

const createCardEl = (productObj) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const imgEl = document.createElement("img");
  imgEl.src = productObj.image;
  imgEl.alt = productObj.name;
  cardEl.append(imgEl);
  cardEl.innerHTML += `<div class="card-body">
         <h5 class="card-title">${productObj.name}</h5>
        <p class="card-text">Price ${productObj.price}</p>
       </div>`;

  const addTocartBtn = document.createElement("button");
  addTocartBtn.className = "btn btn-primary";
  addTocartBtn.id = productObj.id;
  addTocartBtn.textContent = `Buy ${productObj.name} now!`;
  addTocartBtn.addEventListener("click", handleAddToCart);
  cardEl.append(addTocartBtn);

  return cardEl;
};

const addContent = (elToAppend, contentElToBeAdded) =>
  elToAppend.append(contentElToBeAdded);

const render = (elToRenderIn, objArr, createCard) => {
  elToRenderIn.innerHTML = "";
  objArr.map((el) => addContent(elToRenderIn, createCard(el)));
};
render(rootEl, products, createCardEl);

const handleSearchOnSubmit = (e) => {
  e.preventDefault();
  const searchTerm = e.target.children[0].value;
  filteredArr = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  render(rootEl, filteredArr, createCardEl);
};

const handleSort = (e) => {
  const value = e.target.value;
  if (value === "h-l") {
    filteredArr.sort((a, b) => b.price - a.price);
    render(rootEl, filteredArr, createCardEl);
  }
  if (value === "l-h") {
    filteredArr.sort((a, b) => a.price - b.price);
    render(rootEl, filteredArr, createCardEl);
  }
};

const handleShowModal = () => {
  const overlayModal = document.querySelector(".overlay2");
  overlayModal.style.display = "flex";
  overlayModal.style.animation = "fade-in 500ms forwards";
};

const handleCloseBtn = () => {
  const overlayModal = document.querySelector(".overlay2");
  overlayModal.style.animation = "fade-out 500ms forwards";
  setTimeout(() => {
    overlayModal.style.display = "none";
  }, 500);
};

searchForm.addEventListener("submit", handleSearchOnSubmit);
sortedPrice.addEventListener("change", handleSort);
open_modal_btn.addEventListener("click", handleShowModal);
close_btn.addEventListener("click", handleCloseBtn);
