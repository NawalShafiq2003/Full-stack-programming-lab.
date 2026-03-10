import { useState } from "react";

// Greeting Component - accepts name, timeOfDay, bgColor props
function Greeting({ name, timeOfDay, bgColor }) {
  const [hovered, setHovered] = useState(false);

  // Conditional rendering based on timeOfDay
  const greetingConfig = {
    Morning: {
      message: `Good Morning, ${name}! ☀️`,
      sub: "Start your day with energy and purpose.",
      emoji: "🌅",
      accent: "#fbbf24",
    },
    Afternoon: {
      message: `Good Afternoon, ${name}! 🌤️`,
      sub: "Keep the momentum going — you're doing great!",
      emoji: "🌞",
      accent: "#f97316",
    },
    Evening: {
      message: `Good Evening, ${name}! 🌆`,
      sub: "Time to wind down and reflect on today.",
      emoji: "🌇",
      accent: "#a78bfa",
    },
    Night: {
      message: `Good Night, ${name}! 🌙`,
      sub: "Rest well and recharge for tomorrow.",
      emoji: "⭐",
      accent: "#60a5fa",
    },
  };

  const config = greetingConfig[timeOfDay] || {
    message: `Hello, ${name}!`,
    sub: "Welcome!",
    emoji: "👋",
    accent: "#34d399",
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bgColor,
        borderRadius: "20px",
        padding: "32px 28px",
        minWidth: "240px",
        maxWidth: "300px",
        flex: "1",
        boxShadow: hovered
          ? `0 24px 48px rgba(0,0,0,0.35), 0 0 0 2px ${config.accent}44`
          : "0 6px 24px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background emoji watermark */}
      <div style={{
        position: "absolute", top: "-10px", right: "-10px",
        fontSize: "80px", opacity: "0.08",
        pointerEvents: "none", userSelect: "none",
        transform: hovered ? "scale(1.1) rotate(10deg)" : "scale(1) rotate(0deg)",
        transition: "transform 0.4s ease",
      }}>
        {config.emoji}
      </div>

      {/* Time badge */}
      <span style={{
        display: "inline-block",
        background: `${config.accent}22`,
        color: config.accent,
        border: `1px solid ${config.accent}44`,
        fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
        padding: "4px 12px", borderRadius: "20px", marginBottom: "20px",
        fontFamily: "monospace", textTransform: "uppercase",
      }}>
        {timeOfDay}
      </span>

      <h2 style={{
        color: "#f8fafc", margin: "0 0 10px",
        fontSize: "20px", fontFamily: "'Georgia', serif", fontWeight: "700",
        lineHeight: "1.3",
      }}>
        {config.message}
      </h2>

      <p style={{
        color: "rgba(255,255,255,0.55)", margin: 0,
        fontSize: "13px", lineHeight: "1.6", fontFamily: "sans-serif",
      }}>
        {config.sub}
      </p>

      {/* Accent line */}
      <div style={{
        marginTop: "20px", height: "3px", borderRadius: "4px",
        background: `linear-gradient(90deg, ${config.accent}, transparent)`,
        width: hovered ? "100%" : "40%",
        transition: "width 0.4s ease",
      }} />
    </div>
  );
}

// App Component - renders 4 Greeting components with different props
export default function App() {
  const greetings = [
    { name: "Ali", timeOfDay: "Morning", bgColor: "#1c1a14" },
    { name: "Sara", timeOfDay: "Afternoon", bgColor: "#1c140f" },
    { name: "Musharaf", timeOfDay: "Evening", bgColor: "#130f1c" },
    { name: "Zara", timeOfDay: "Night", bgColor: "#0f131c" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at top, #1a1a2e 0%, #0d0d0d 70%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "60px 20px", fontFamily: "sans-serif",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{ color: "#6366f1", fontFamily: "monospace", letterSpacing: "3px", fontSize: "11px", margin: "0 0 10px", textTransform: "uppercase" }}>
          Lab Task 3
        </p>
        <h1 style={{
          color: "#f8fafc", fontSize: "clamp(28px, 5vw, 42px)", margin: "0 0 12px",
          fontFamily: "'Georgia', serif", fontWeight: "700",
        }}>
          Dynamic Greeting App
        </h1>
        <p style={{ color: "#475569", fontSize: "14px", margin: 0, maxWidth: "400px" }}>
          Conditional rendering based on the <code style={{ color: "#a78bfa", background: "#1e1b4b", padding: "2px 8px", borderRadius: "4px" }}>timeOfDay</code> prop
        </p>
      </div>

      {/* Greeting Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", maxWidth: "1100px" }}>
        {greetings.map((g, i) => (
          <Greeting key={i} {...g} />
        ))}
      </div>
    </div>
  );
}
