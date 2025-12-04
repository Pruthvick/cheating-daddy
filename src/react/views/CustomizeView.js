export default function CustomizeView(props) {
  const config = props.config || {};
  const [layout, setLayout] = React.useState(config.layout || "normal");
  const [stealth, setStealth] = React.useState(config.stealthLevel || "balanced");

  const rowStyle = {
    marginBottom: "16px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
  };

  const selectStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid var(--border-color)",
    background: "var(--input-background)",
    color: "var(--text-color)",
  };

  function handleLayoutChange(e) {
    const value = e.target.value;
    setLayout(value);

    if (window.electronAPI) {
      window.electronAPI.invoke("set-layout", value);
    }
  }

  function handleStealthChange(e) {
    const value = e.target.value;
    setStealth(value);

    if (window.electronAPI) {
      window.electronAPI.invoke("set-stealth-level", value);
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Customize"),

    React.createElement(
      "div",
      { style: rowStyle },
      React.createElement("label", { style: labelStyle }, "Layout mode"),
      React.createElement(
        "select",
        { style: selectStyle, value: layout, onChange: handleLayoutChange },
        React.createElement("option", { value: "normal" }, "Normal"),
        React.createElement("option", { value: "compact" }, "Compact")
      )
    ),

    React.createElement(
      "div",
      { style: rowStyle },
      React.createElement("label", { style: labelStyle }, "Stealth level"),
      React.createElement(
        "select",
        { style: selectStyle, value: stealth, onChange: handleStealthChange },
        React.createElement("option", { value: "visible" }, "Visible"),
        React.createElement("option", { value: "balanced" }, "Balanced"),
        React.createElement("option", { value: "ultra" }, "Ultra Stealth")
      )
    ),

    React.createElement(
      "p",
      { style: { opacity: 0.8 } },
      "These settings are saved via Electron IPC to the local config file."
    )
  );
}
