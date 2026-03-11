/* ============================================
   HotSpring - Shared Components
   Injects header and footer into all pages
   ============================================ */

var HotSpring = {

  getHeader: function(activePage) {
    return `
    <!-- TOP BAR -->
    <div class="top-bar">
      <div class="container">
        <div class="support">Call for Customer support: <a href="tel:02038989565">020 38989565</a></div>
        <div class="top-links">
          <a href="my_account.html">My Account</a>
          <a href="#">Wishlist</a>
          <a href="payment.html">To Checkout</a>
        </div>
      </div>
    </div>

    <!-- HEADER -->
    <header>
      <div class="container">
        <div class="logo">
          <a href="../index.html" style="text-decoration:none">
            <h1>HOTSPRING <span>Portable Spas</span></h1>
          </a>
        </div>
        <div class="cart-area">
          <div class="cart-box">
            <span class="cart-icon">🛒</span>
            <span>My Cart: <strong>0 Items (s)</strong></span>
            <select><option>▼</option></select>
          </div>
        </div>
      </div>
    </header>

    <!-- NAV -->
    <nav class="main-nav">
      <div class="container">
        <button class="mobile-nav-toggle" style="display:none;background:transparent;border:none;color:white;font-size:20px;padding:8px;">☰</button>
        <ul>
          <li><a href="../index.html" ${activePage==='home'?'style="background:rgba(0,0,0,0.25)"':''}>CATAGORY</a></li>
          <li><a href="#" ${activePage==='brand'?'style="background:rgba(0,0,0,0.25)"':''}>BRAND</a></li>
          <li><a href="#" ${activePage==='info'?'style="background:rgba(0,0,0,0.25)"':''}>INFO</a></li>
        </ul>
        <div class="nav-search">
          <input type="text" placeholder="Search">
          <button type="button">SEARCH</button>
        </div>
      </div>
    </nav>`;
  },

  getFooter: function() {
    return `
    <!-- PARTNERS BAR -->
    <div class="container" style="margin-bottom:0">
      <div class="partners-bar">
        <div class="save-banner">
          <div class="save-big">SAVE $1,000'S</div>
          <div class="save-subtitle">ON THE TOP SPA BRANDS</div>
          <div class="save-subtitle">HUGE DISCOUNTS &nbsp; SHOP EARLY FOR THE BEST SELECTION</div>
        </div>
        <div class="partner-logo" style="color:#0099cc;font-family:'Oswald',sans-serif;">
          <span style="color:#0099cc;">Oceanic</span><span style="color:#009966;font-style:italic;">Spa</span>
        </div>
        <div class="partner-logo" style="color:#cc3300;font-family:'Oswald',sans-serif;">
          Caldera<span style="color:#cc6600;">Spas</span>
        </div>
        <div class="partner-logo" style="color:#336600;font-family:'Oswald',sans-serif;">
          Island<span style="color:#009933;">Spas</span>
          <span style="display:block;font-size:10px;color:#666;font-weight:400">by ARTESIAN</span>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Contact Us</h4>
            <address>
              yoursitename.com<br>
              CALL 24/7: 888-201-8899<br>
              Your Address:<br>
              Street<br>
              State &amp; Zip Code<br>
              City &amp; Country<br>
              Email: <a href="mailto:servicemail@yoursitename.com" class="red">servicemail@yoursitename.com</a>
            </address>
            <div class="social-icons" style="margin-top:12px">
              <a href="#" class="si-twitter">t</a>
              <a href="#" class="si-facebook">f</a>
              <a href="#" class="si-linkedin">in</a>
              <a href="#" class="si-google">g+</a>
              <a href="#" class="si-youtube">▶</a>
              <a href="#" class="si-pinterest">P</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="about_us.html">About Us</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Search Terms</a></li>
              <li><a href="contact_us.html">Contact Us</a></li>
              <li><a href="about_us.html">About Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>My Account</h4>
            <ul>
              <li><a href="login.html">Sign In</a></li>
              <li><a href="shopping_cart.html">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Signup For A News Letter</h4>
            <p style="font-size:11px;margin-bottom:8px;">Sign up for our news letter:</p>
            <form class="newsletter-form">
              <input type="email" class="newsletter-input" placeholder="Your email address">
            </form>
            <p style="font-size:11px;margin-bottom:6px;margin-top:4px;color:#aaa;">Payment Solutions</p>
            <div class="payment-icons">
              <span class="payment-icon"><span class="pi-mc">MC</span></span>
              <span class="payment-icon" style="background:#cc0000;color:white">VISA</span>
              <span class="payment-icon"><span class="pi-ae">AE</span></span>
              <span class="payment-icon"><span class="pi-visa">VISA</span></span>
              <span class="payment-icon"><span class="pi-pp">PP</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2014 Hottubspaservice.com. All Rights Reserved.
      </div>
    </footer>

    <!-- BACK TO TOP -->
    <button id="back-to-top" style="display:none;position:fixed;bottom:25px;right:25px;background:#cc0000;color:white;border:none;width:40px;height:40px;border-radius:50%;font-size:18px;cursor:pointer;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,0.3);">↑</button>
    `;
  },

  init: function(activePage) {
    document.getElementById('site-header').innerHTML = this.getHeader(activePage);
    document.getElementById('site-footer').innerHTML = this.getFooter();
  }
};
