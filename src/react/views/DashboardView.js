export default function DashboardView(props) {
  const config = props.config;

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "8px",
    fontWeight: 600,
  };

  const mutedStyle = {
    opacity: 0.8,
    marginBottom: "16px",
  };

  const boxStyle = {
    borderRadius: "8px",
    border: "1px solid var(--border-color)",
    padding: "12px",
    marginBottom: "12px",
  };

  return React.createElement(
    "div",
    null,
    React.createElement("div", { style: titleStyle }, "Main Dashboard"),
    React.createElement(
      "div",
      { style: mutedStyle },
      "This is a simplified React version of the CheatingDaddy UI."
    ),

    React.createElement(
      "div",
      { style: boxStyle },
      React.createElement("strong", null, "Current config"),
      React.createElement(
        "div",
        null,
        config
          ? "Layout: " +
              (config.layout || "normal") +
              ", Stealth level: " +
              (config.stealthLevel || "balanced")
          : "Loading config from main process..."
      )
    ),

    React.createElement(
      "div",
      { style: boxStyle },
      React.createElement("strong", null, "Quick tips"),
      React.createElement(
        "ul",
        null,
        React.createElement("li", null, "Use the Customize tab to change layout/stealth."),
        React.createElement("li", null, "Use Assistant tab for dummy chat preview."),
        React.createElement("li", null, "Use History tab for past sessions (placeholder).")
      )
    )
  );
}
