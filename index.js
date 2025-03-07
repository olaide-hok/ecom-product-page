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
    console.log(`${quantity} items selected`);
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
