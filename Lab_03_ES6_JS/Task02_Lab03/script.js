// ── Products array (const) ─────────────────────────────────────────────
const products = [
  { name: "Laptop",     price: 85000 },
  { name: "Mouse",      price: 1500  },
  { name: "Keyboard",   price: 3000  },
  { name: "Monitor",    price: 25000 },
  { name: "USB Hub",    price: 800   },
];

// ── Rest Operator: collects all arguments into 'items' array ───────────
function addToCart(...items) {
  return items;
}

// ── Spread Operator: expands 'products' array into individual arguments ─
const cart = addToCart(...products);

// ── Spread Operator: clone the cart into a new independent array ────────
const clonedCart = [...cart];

// ── Array Destructuring: extract first item and remaining items ─────────
const [firstProduct, ...remainingProducts] = cart;

// ── Render Cart Items ──────────────────────────────────────────────────
const cartItemsEl = document.getElementById("cartItems");
let totalPrice = 0;

cart.forEach((item, index) => {
  totalPrice += item.price;
  const isFirst = index === 0;
  cartItemsEl.innerHTML += `
    <div class="item-row">
      <span class="item-name">
        ${item.name}
        ${isFirst ? '<span class="first-tag">First</span>' : ''}
      </span>
      <span class="item-price">Rs. ${item.price.toLocaleString()}</span>
    </div>
  `;
});

// ── Render Stats ───────────────────────────────────────────────────────
document.getElementById("totalItems").textContent = cart.length;
document.getElementById("totalPrice").textContent = `Rs. ${totalPrice.toLocaleString()}`;

// ── Render First Item (Destructuring result) ───────────────────────────
document.getElementById("firstName").textContent  = firstProduct.name;
document.getElementById("firstPrice").textContent = `Rs. ${firstProduct.price.toLocaleString()}`;

// ── Render Remaining Items ─────────────────────────────────────────────
const restEl = document.getElementById("restItems");
remainingProducts.forEach(item => {
  restEl.innerHTML += `<span class="rest-tag">${item.name}</span>`;
});

// ── Render Clone Info ──────────────────────────────────────────────────
document.getElementById("cloneCount").textContent = clonedCart.length;
