import { useState } from "react";

// CourseItem Component - accepts courseName, instructor, duration, courseType props
function CourseItem({ courseName, instructor, duration, courseType }) {
  const [hovered, setHovered] = useState(false);
  const isOnline = courseType === "Online";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1e293b" : "#141c2b",
        border: `1px solid ${hovered ? "#334155" : "#1e293b"}`,
        borderLeft: `4px solid ${isOnline ? "#38bdf8" : "#fb923c"}`,
        borderRadius: "12px",
        padding: "20px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
        transition: "all 0.2s ease",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        cursor: "default",
      }}
    >
      {/* Left: Course Info */}
      <div style={{ flex: 1, minWidth: "200px" }}>
        <h3 style={{
          margin: "0 0 6px", color: "#f1f5f9", fontSize: "17px",
          fontFamily: "'Georgia', serif", fontWeight: "700",
        }}>
          {courseName}
        </h3>
        <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px", fontFamily: "monospace" }}>
          👨‍🏫 {instructor}
        </p>
      </div>

      {/* Right: Badges */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <Badge icon="⏱️" label={duration} color="#475569" textColor="#cbd5e1" />
        <Badge
          label={courseType}
          color={isOnline ? "rgba(56,189,248,0.15)" : "rgba(251,146,60,0.15)"}
          textColor={isOnline ? "#38bdf8" : "#fb923c"}
          border={isOnline ? "1px solid rgba(56,189,248,0.3)" : "1px solid rgba(251,146,60,0.3)"}
          icon={isOnline ? "🌐" : "🏫"}
        />
      </div>
    </div>
  );
}

function Badge({ icon, label, color, textColor, border }) {
  return (
    <span style={{
      background: color, color: textColor, fontSize: "12px", fontWeight: "600",
      padding: "5px 12px", borderRadius: "20px", border: border || "none",
      fontFamily: "monospace", letterSpacing: "0.5px", whiteSpace: "nowrap",
    }}>
      {icon && <span style={{ marginRight: "5px" }}>{icon}</span>}
      {label}
    </span>
  );
}

// Course data array
const courses = [
  { courseName: "Full Stack Web Development", instructor: "Mr. Sharif Hussain", duration: "16 Weeks", courseType: "Online" },
  { courseName: "Data Structures & Algorithms", instructor: "Dr. Ayesha Malik", duration: "12 Weeks", courseType: "Offline" },
  { courseName: "Machine Learning Fundamentals", instructor: "Dr. Usman Tariq", duration: "10 Weeks", courseType: "Online" },
  { courseName: "Database Management Systems", instructor: "Mr. Zafar Iqbal", duration: "8 Weeks", courseType: "Offline" },
  { courseName: "Cloud Computing & DevOps", instructor: "Ms. Hira Baig", duration: "14 Weeks", courseType: "Online" },
];

// App Component
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020617 0%, #0f172a 50%, #020617 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "60px 20px", fontFamily: "sans-serif",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ color: "#38bdf8", fontFamily: "monospace", letterSpacing: "3px", fontSize: "12px", margin: "0 0 8px" }}>
          LAB TASK 2
        </p>
        <h1 style={{
          color: "#f1f5f9", fontSize: "clamp(26px, 4vw, 38px)", margin: "0 0 12px",
          fontFamily: "'Georgia', serif", fontWeight: "700",
        }}>
          Course Catalog
        </h1>
        <p style={{ color: "#475569", fontSize: "14px", margin: 0 }}>
          {courses.length} courses available this semester
        </p>
      </div>

      {/* Filter Legend */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "13px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#38bdf8", display: "inline-block" }} />
          Online
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "13px" }}>
          <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#fb923c", display: "inline-block" }} />
          Offline
        </div>
      </div>

      {/* Course List */}
      <div style={{
        width: "100%", maxWidth: "760px",
        display: "flex", flexDirection: "column", gap: "12px",
      }}>
        {courses.map((course, index) => (
          <CourseItem key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
