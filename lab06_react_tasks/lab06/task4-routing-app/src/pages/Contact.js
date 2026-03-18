import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields before submitting.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setError("");
  }

  function handleReset() {
    setForm({ name: "", email: "", message: "" });
    setSubmitted(false);
  }

  return (
    <div className="contact">
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Have a question? We'd love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>support@reactstore.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+92 300 1234567</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>Abbottabad, KPK, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button className="btn-submit" onClick={handleReset}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {error && <p className="error-msg">{error}</p>}
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
