import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-badge">⚛ Built with React Router</div>
        <h1 className="hero-title">Welcome to ReactStore</h1>
        <p className="hero-desc">
          Your one-stop shop for premium developer tools and accessories.
          Browse our curated collection of high-quality products designed
          to boost your productivity.
        </p>
        <div className="hero-btns">
          <Link to="/products" className="btn-primary">Shop Products</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered within 2-3 business days anywhere.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3>Secure Payments</h3>
          <p>All transactions are encrypted and fully secure.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <h3>Quality Assured</h3>
          <p>Every product is hand-picked and tested by our expert team.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💬</span>
          <h3>24/7 Support</h3>
          <p>Our team is always available to help you with any questions.</p>
        </div>
      </div>

      <div className="routing-note">
        <strong>React Router Demo:</strong> This page is rendered at the <code>/</code> route.
        Navigate using the links above — no page reload happens!
      </div>
    </div>
  );
}

export default Home;
