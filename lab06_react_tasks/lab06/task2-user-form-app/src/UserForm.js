import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both Name and Email fields.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmittedData({ name, email });
    setName("");
    setEmail("");
    setError("");
  }

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">User Registration</h1>
          <p className="form-subtitle">Lab Task 2 — State + Event Handling</p>
        </div>

        <div className="form-body">
          <div className="field-group">
            <label className="field-label" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              className="field-input"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="field-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {submittedData && (
          <div className="result-section">
            <div className="result-header">
              <span className="result-badge">Submitted</span>
              <h3 className="result-title">Entered Information</h3>
            </div>
            <div className="result-grid">
              <div className="result-item">
                <span className="result-key">Name</span>
                <span className="result-val">{submittedData.name}</span>
              </div>
              <div className="result-item">
                <span className="result-key">Email</span>
                <span className="result-val">{submittedData.email}</span>
              </div>
            </div>
            <p className="cleared-note">✓ Input fields cleared after submission</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserForm;
