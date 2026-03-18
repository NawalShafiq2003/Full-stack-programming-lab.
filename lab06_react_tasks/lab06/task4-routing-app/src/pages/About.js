import "./About.css";

function About() {
  const team = [
    { name: "Ahmed Raza", role: "Founder & CEO", initials: "AR", color: "#3b82f6" },
    { name: "Sara Khan", role: "Lead Developer", initials: "SK", color: "#8b5cf6" },
    { name: "Bilal Hussain", role: "Product Designer", initials: "BH", color: "#10b981" },
  ];

  return (
    <div className="about">
      <div className="page-header">
        <h1 className="page-title">About ReactStore</h1>
        <p className="page-subtitle">Learn about who we are and what we stand for</p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          ReactStore was founded in 2024 by a group of passionate software engineers
          who believed that every developer deserves access to premium tools without
          breaking the bank. What started as a small online shop has grown into a
          trusted platform used by thousands of developers worldwide.
        </p>
        <p>
          We are committed to quality, transparency, and customer satisfaction.
          Every product on our platform is hand-tested by our in-house team before
          it reaches your doorstep.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower developers and tech enthusiasts with the best tools at fair
          prices, backed by exceptional customer support and a seamless shopping experience.
        </p>
      </div>

      <div className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div
                className="team-avatar"
                style={{ background: member.color }}
              >
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-num">500+</span>
          <span className="stat-label">Products</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">12K+</span>
          <span className="stat-label">Customers</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">4.9★</span>
          <span className="stat-label">Rating</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">24/7</span>
          <span className="stat-label">Support</span>
        </div>
      </div>
    </div>
  );
}

export default About;
