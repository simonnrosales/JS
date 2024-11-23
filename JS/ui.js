import { getCartItems } from "./cart.js";

const products = [
  {
    id: 1,
    name: "TinyJobs",
    price:  6500,
    image:
      "assets/img/food/tinyjobs.png",
  },
  {
    id: 2,
    name: "BigJobs",
    price:  9000,
    image:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
  {
    id: 3,
  name: "Jobster",
  price:  10000,
  image:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
  {
    id: 4,
  name: "MegaJobster",
  price:  13000,
  image:
      "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
];

const cart = []

const getUsers = async ()=> {

  const URL = "https://jsonplaceholder.org/users"

  const response = await fetch(URL)

  const data = await response.json()

  return data

}

export const renderProducts = async () => {
  const productList = document.getElementById("productList");


  const products =await  getUsers()

  products.forEach((product) => {
    const productCard = `
                          <article class="product" ">
                            <div>
                                <img class="product__image" src="${product.image}" alt="${product.title}" />
                              </div>
                              <div>
                                <h5 class="product__title">${product.firstname} ${product.lastname}</h5>
                                <p class="product__price">$${product.price}</p>
                              </div>

                              <button class="product__add" data-id="${product.id}">Agregar</button>
                          </article>
                `;




    productList.innerHTML += productCard;
  });


  const updateCartUi = ()=> {
    /* const cartItems = document.getElementById("cart__items")

    cart.forEach (
      (item)=> {
        cartItems.innerHTML += item
      }
    ) */


  }

  const addToCart = (event)=> {

    const item = event.target;

    const idItem = item.getAttribute("data-id")

    console.log(idItem)

    cart.push(item)

    updateCartUi()

  }

  const productAddButtons = document.getElementsByClassName("product__add") 

/*   for( let productAddButton of productAddButtons){
    productAddButton.addEventListener("click", addToCart )

  } */
 
};

export const updateCartUi = () => {
  const cartContainer = document.querySelector(".cart__container");

  cartContainer.innerHTML = "";
  const cartItems = getCartItems();

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");
    cartItem.setAttribute("data-id", item.id);

    cartItem.innerHTML = `
     <div class="cart__item">
        <div class="cart__item-title">${item.title}</div>
        <div>${item.price}</div>
        <div>
          <button class="cart__increase">+</button>
          <button class="cart__decrease">-</button>
          <button class="cart__remove">Eliminar</button>
        </div>
      </div>
    
    `;

    cartContainer.appendChild(cartItem);
  });
};