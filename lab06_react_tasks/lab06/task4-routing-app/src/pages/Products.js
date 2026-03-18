import { useState } from "react";
import "./Products.css";

const PRODUCTS = [
  { id: 1, name: "Laptop Pro X", category: "Computers", desc: "High-performance laptop for developers. Intel i9, 32GB RAM, 1TB SSD.", price: 1299, emoji: "💻" },
  { id: 2, name: "Wireless Mouse", category: "Accessories", desc: "Ergonomic wireless mouse with 12-month battery life and precision tracking.", price: 49, emoji: "🖱️" },
  { id: 3, name: "Mechanical Keyboard", category: "Accessories", desc: "Tactile mechanical switches for fast, accurate typing with RGB backlight.", price: 129, emoji: "⌨️" },
  { id: 4, name: "4K Monitor 27\"", category: "Displays", desc: "Ultra-sharp 4K display with HDR support and 144Hz refresh rate.", price: 399, emoji: "🖥️" },
  { id: 5, name: "USB-C Hub 7-in-1", category: "Accessories", desc: "Expand your ports with HDMI, USB-A x3, SD card, and more.", price: 39, emoji: "🔌" },
  { id: 6, name: "Noise-Cancel Headphones", category: "Audio", desc: "Studio-quality sound with active noise cancellation for deep focus.", price: 249, emoji: "🎧" },
  { id: 7, name: "Webcam HD 1080p", category: "Cameras", desc: "Crystal-clear 1080p video for meetings and streaming.", price: 89, emoji: "📷" },
  { id: 8, name: "Desk Lamp LED", category: "Accessories", desc: "Adjustable brightness LED desk lamp with USB charging port.", price: 35, emoji: "💡" },
];

function Products() {
  const [cart, setCart] = useState({});

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function removeFromCart(id) {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id] -= 1;
      else delete updated[id];
      return updated;
    });
  }

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = PRODUCTS.filter((p) => cart[p.id]).reduce(
    (acc, p) => acc + p.price * (cart[p.id] || 0), 0
  );

  return (
    <div className="products">
      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">{PRODUCTS.length} items available</p>
        </div>
        {totalItems > 0 && (
          <div className="cart-summary">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
            <span className="cart-total">${totalPrice.toLocaleString()}</span>
          </div>
        )}
      </div>

      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className={`product-card ${cart[product.id] ? "in-cart" : ""}`}>
            <div className="product-emoji">{product.emoji}</div>
            <div className="product-category">{product.category}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.desc}</p>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              {cart[product.id] ? (
                <div className="qty-controls">
                  <button className="qty-btn minus" onClick={() => removeFromCart(product.id)}>−</button>
                  <span className="qty-num">{cart[product.id]}</span>
                  <button className="qty-btn plus" onClick={() => addToCart(product.id)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
