export default function AssistantView(props) {
  const [messages, setMessages] = React.useState([
    { from: "system", text: "Assistant ready. This is a demo UI." },
  ]);
  const [input, setInput] = React.useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const messagesStyle = {
    flex: 1,
    overflowY: "auto",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid var(--border-color)",
    marginBottom: "8px",
  };

  const inputRowStyle = {
    display: "flex",
    gap: "8px",
  };

  const inputStyle = {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid var(--border-color)",
    background: "var(--input-background)",
    color: "var(--text-color)",
  };

  const buttonStyle = {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid var(--button-border)",
    background: "var(--text-input-button-background)",
    color: "white",
    cursor: "pointer",
  };

  function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input.trim() };
    const reply = {
      from: "assistant",
      text: "This is a static demo response to: " + input.trim(),
    };

    setMessages(function (prev) {
      return prev.concat(userMsg, reply);
    });
    setInput("");

    if (props.setStatusText) {
      props.setStatusText("Last message sent (demo only)");
    }
  }

  return React.createElement(
    "div",
    { style: containerStyle },
    React.createElement("h2", null, "Assistant (Demo)"),

    React.createElement(
      "div",
      { style: messagesStyle },
      messages.map(function (m, idx) {
        const alignRight = m.from === "user";
        const bubbleStyle = {
          padding: "6px 10px",
          marginBottom: "4px",
          borderRadius: "6px",
          maxWidth: "80%",
          background:
            m.from === "user" ? "rgba(0,122,255,0.3)" : "rgba(255,255,255,0.06)",
          alignSelf: alignRight ? "flex-end" : "flex-start",
        };

        return React.createElement(
          "div",
          { key: idx, style: { display: "flex", justifyContent: alignRight ? "flex-end" : "flex-start" } },
          React.createElement("div", { style: bubbleStyle }, m.text)
        );
      })
    ),

    React.createElement(
      "div",
      { style: inputRowStyle },
      React.createElement("input", {
        style: inputStyle,
        value: input,
        placeholder: "Type a message (demo)...",
        onChange: function (e) {
          setInput(e.target.value);
        },
        onKeyDown: function (e) {
          if (e.key === "Enter") sendMessage();
        },
      }),
      React.createElement(
        "button",
        { style: buttonStyle, onClick: sendMessage },
        "Send"
      )
    )
  );
}
