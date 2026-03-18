import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-card">
        <div className="error-code">404</div>
        <div className="error-emoji">🔍</div>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you may have mistyped the URL.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-home">← Back to Home</Link>
          <Link to="/products" className="btn-products">Browse Products</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
