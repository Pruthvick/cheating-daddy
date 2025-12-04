export default function SettingsView() {
  const setLayout = (layout) => {
    if (window.electronAPI) {
      window.electronAPI.invoke("set-layout", layout);
    }
  };

  const btn = {
    padding: "10px",
    marginRight: "10px",
    background: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px"
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Settings"),
    React.createElement("p", null, "Choose Layout:"),
    React.createElement("button", { style: btn, onClick: () => setLayout("normal") }, "Normal"),
    React.createElement("button", { style: btn, onClick: () => setLayout("compact") }, "Compact")
  );
}
