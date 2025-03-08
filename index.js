// Select DOM elements

// Mobile Navigation
const openMobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");

// Quantity
const qtyDec = document.getElementById("decQty");
const qtyInc = document.getElementById("incQty");
const qtyDisplay = document.getElementById("quantity");
const addToCartBtn = document.getElementById("addToCart");

// Cart Functionality
const cartBtn = document.getElementById("cart_icon");
const cartQty = document.getElementById("cart_qty");
const cartModal = document.querySelector(".cart_modal");
const cartItems = document.querySelector(".cart_items");
const cartItem = document.querySelector(".cart_item");
const cartEmpty = document.querySelector(".cart_empty");
const cartDeleteBtn = document.getElementById("cartDelete");
let cartCount = 0;
let cartTotal = 0;

cartBtn.addEventListener("click", () => {
  const isCartModalOpen = cartModal.classList.contains("d-flex");
  if (isCartModalOpen) {
    // close the cart modal
    cartModal.classList.add("d-none");
    cartModal.classList.remove("d-flex");
  } else {
    // open the cart modal
    cartModal.classList.remove("d-none");
    cartModal.classList.add("d-flex");
  }
});

// Update cartQty display
updateCartQtyDisplay = () => {
  if (cartCount > 0) {
    cartQty.classList.remove("d-none");
  } else {
    cartQty.classList.add("d-none");
  }
};

updateCartItems = () => {
  if (cartCount === 0) {
    cartEmpty.classList.add("d-none");
  } else {
    cartItem.innerHTML = `
        <img
            src="./images/image-product-1-thumbnail.jpg"
            alt="sneaker"
            width="50px"
            height="50px"
        >
        <div class="cart_product_details">
            <p class="text-preset-3-regular cart_product-name">
                Fall Limited Edition Sneakers
            </p>
            <span class="text-preset-3-regular cart_price">$125.00 x ${cartCount}</span>
            <span class="text-preset-3-bold cart_total">$${cartTotal}.00</span>
        </div>
          <button id="cartDelete" type="button">
              <img
                src="./images/icon-delete.svg"
                alt="delete item"
                width="14px"
                height="16px"
              >
            </button>        
        `;
    cartItems.classList.remove("d-none");
    cartItems.classList.add("d-flex");
    cartEmpty.classList.add("d-none");
  }
};

// Decrease quantity
qtyDec.addEventListener("click", () => {
  let quantity = parseInt(qtyDisplay.textContent);
  if (quantity > 0) quantity--;
  qtyDisplay.textContent = quantity;
});

// Increase quantity
qtyInc.addEventListener("click", () => {
  let quantity = parseInt(qtyDisplay.textContent);
  quantity++;
  qtyDisplay.textContent = quantity;
});

// Add To Cart Button
addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(qtyDisplay.textContent);
  if (quantity > 0) {
    cartCount += quantity;
    cartTotal += quantity * 125;
    cartQty.textContent = cartCount;
    updateCartQtyDisplay();
    updateCartItems();
    qtyDisplay.textContent = 0;
  }
});

// Toggle mobile menu and overlay
function toggleMenu() {
  const isMenuOpen = mobileNav.classList.contains("d-flex");

  if (isMenuOpen) {
    // Close the menu
    mobileNav.classList.remove("d-flex");
    mobileNav.classList.add("d-none");
    overlay.classList.remove("d-flex");
    overlay.classList.add("d-none");
  } else {
    // Open the menu
    mobileNav.classList.remove("d-none");
    mobileNav.classList.add("d-flex");
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
  }
}

// Add event listeners
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Close menu when overlay is clicked
