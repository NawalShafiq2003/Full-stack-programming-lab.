import { useState } from "react";
import "./Actions.css";

const BG_COLORS = [
  "#fef9c3", "#dbeafe", "#dcfce7", "#fce7f3",
  "#ede9fe", "#fed7aa", "#cffafe"
];

function Actions() {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#f0f4f8");
  const [bgIndex, setBgIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [eventLog, setEventLog] = useState([]);

  function addLog(entry) {
    setEventLog((prev) => [entry, ...prev].slice(0, 6));
  }

  function handleShowMessage() {
    const msg = "Hello! This message was triggered by an onClick event.";
    setMessage(msg);
    addLog({ type: "onClick", action: "Show Message", time: new Date().toLocaleTimeString() });
  }

  function handleChangeBackground() {
    const next = (bgIndex + 1) % BG_COLORS.length;
    setBgIndex(next);
    setBgColor(BG_COLORS[next]);
    addLog({ type: "onClick", action: "Change Background", time: new Date().toLocaleTimeString() });
  }

  function handleShowAlert() {
    addLog({ type: "onClick", action: "Show Alert", time: new Date().toLocaleTimeString() });
    alert("Alert! This was triggered by an onClick event handler in React.");
  }

  function handleMouseOver(label, index) {
    setHoverIndex(index);
    addLog({ type: "onMouseOver", action: `Hovering: ${label}`, time: new Date().toLocaleTimeString() });
  }

  function handleMouseOut() {
    setHoverIndex(null);
  }

  const buttons = [
    {
      label: "Show Message",
      icon: "💬",
      desc: "onClick",
      color: "#3b82f6",
      bg: "#eff6ff",
      onClick: handleShowMessage,
    },
    {
      label: "Change Background",
      icon: "🎨",
      desc: "onClick",
      color: "#8b5cf6",
      bg: "#f5f3ff",
      onClick: handleChangeBackground,
    },
    {
      label: "Show Alert",
      icon: "🔔",
      desc: "onClick",
      color: "#f59e0b",
      bg: "#fffbeb",
      onClick: handleShowAlert,
    },
  ];

  return (
    <div className="actions-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="actions-container">
        <h1 className="actions-title">Interactive Buttons App</h1>
        <p className="actions-subtitle">Lab Task 3 — Event Handling</p>

        <div className="btn-grid">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className="action-btn"
              style={{
                borderColor: hoverIndex === i ? btn.color : "#e2e8f0",
                backgroundColor: hoverIndex === i ? btn.bg : "#ffffff",
                color: hoverIndex === i ? btn.color : "#334155",
                transform: hoverIndex === i ? "translateY(-3px)" : "none",
              }}
              onClick={btn.onClick}
              onMouseOver={() => handleMouseOver(btn.label, i)}
              onMouseOut={handleMouseOut}
            >
              <span className="btn-icon">{btn.icon}</span>
              <span className="btn-label">{btn.label}</span>
              <span className="btn-event-tag" style={{ color: btn.color, background: btn.bg }}>
                {btn.desc}
              </span>
            </button>
          ))}
        </div>

        {message && (
          <div className="message-box">
            <span className="message-icon">✅</span>
            {message}
          </div>
        )}

        <div className="log-section">
          <h3 className="log-title">Event Log</h3>
          {eventLog.length === 0 ? (
            <p className="log-empty">No events fired yet. Click a button!</p>
          ) : (
            <div className="log-list">
              {eventLog.map((entry, i) => (
                <div key={i} className="log-entry" style={{ opacity: 1 - i * 0.12 }}>
                  <span className={`log-type ${entry.type === "onMouseOver" ? "hover" : "click"}`}>
                    {entry.type}
                  </span>
                  <span className="log-action">{entry.action}</span>
                  <span className="log-time">{entry.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Actions;
