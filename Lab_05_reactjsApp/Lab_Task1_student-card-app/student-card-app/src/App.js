import { useState } from "react";

// StudentCard Component - accepts name, rollNo, department, university, color props
function StudentCard({ name, rollNo, department, university, color }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundColor: color || "#1e293b",
    transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: hovered
      ? `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${color}55`
      : "0 4px 16px rgba(0,0,0,0.2)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    minWidth: "260px",
    maxWidth: "320px",
    flex: "1",
  };

  const glowStyle = {
    position: "absolute",
    top: "-40px",
    right: "-40px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    pointerEvents: "none",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={glowStyle} />
      {/* Avatar Circle */}
      <div style={{
        width: "60px", height: "60px", borderRadius: "50%",
        background: "rgba(255,255,255,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "24px", fontWeight: "700", color: "#fff",
        marginBottom: "16px", border: "2px solid rgba(255,255,255,0.2)",
        fontFamily: "'Georgia', serif",
      }}>
        {name.charAt(0)}
      </div>

      <h2 style={{ margin: "0 0 4px", color: "#fff", fontSize: "20px", fontFamily: "'Georgia', serif", fontWeight: "700" }}>
        {name}
      </h2>
      <p style={{ margin: "0 0 16px", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "monospace", letterSpacing: "1px" }}>
        #{rollNo}
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "16px" }}>
        <InfoRow icon="🎓" label="Department" value={department} />
        <InfoRow icon="🏛️" label="University" value={university} />
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
      <span style={{ fontSize: "16px", marginTop: "1px" }}>{icon}</span>
      <div>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.45)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "monospace" }}>{label}</p>
        <p style={{ margin: 0, color: "#fff", fontSize: "14px", fontWeight: "500", fontFamily: "'Georgia', serif" }}>{value}</p>
      </div>
    </div>
  );
}

// App Component - renders 3 StudentCard components
export default function App() {
  const students = [
    { name: "Ali Hassan", rollNo: "F21-BSSE-001", department: "Software Engineering", university: "Air University", color: "#1e3a5f" },
    { name: "Musharaf Khan", rollNo: "F21-BSSE-042", department: "AI & Machine Learning", university: "Air University", color: "#3b1f5e" },
    { name: "Sara Ahmed", rollNo: "F21-BSSE-078", department: "Cyber Security", university: "Air University", color: "#1f4e3b" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "40px 20px", fontFamily: "sans-serif",
    }}>
      <h1 style={{
        color: "#fff", fontSize: "clamp(24px, 4vw, 36px)", marginBottom: "8px",
        fontFamily: "'Georgia', serif", fontWeight: "700", textAlign: "center",
      }}>
        Student Information Cards
      </h1>
      <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "48px", fontSize: "14px", fontFamily: "monospace", letterSpacing: "1px" }}>
        Lab Task 1 — React Components & Props
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", maxWidth: "1100px" }}>
        {students.map((student) => (
          <StudentCard key={student.rollNo} {...student} />
        ))}
      </div>
    </div>
  );
}
