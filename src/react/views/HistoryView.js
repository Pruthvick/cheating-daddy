export default function HistoryView() {
  const itemStyle = {
    padding: "8px",
    borderBottom: "1px solid var(--border-color)",
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "History"),
    React.createElement(
      "p",
      { style: { opacity: 0.8 } },
      "This is a placeholder history view. In the original app this would show past sessions."
    ),
    React.createElement(
      "div",
      null,
      React.createElement("div", { style: itemStyle }, "Session #1 – Demo entry"),
      React.createElement("div", { style: itemStyle }, "Session #2 – Demo entry")
    )
  );
}
