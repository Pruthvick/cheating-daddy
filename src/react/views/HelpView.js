export default function HelpView(props) {
  const linkStyle = {
    color: "var(--link-color)",
    cursor: "pointer",
    textDecoration: "underline",
  };

  function openSite() {
    if (props.onOpenHelpSite) {
      props.onOpenHelpSite();
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Help & Docs"),
    React.createElement(
      "p",
      { style: { opacity: 0.8 } },
      "This is a simplified Help screen. The real app opens external documentation."
    ),
    React.createElement(
      "p",
      null,
      "Click ",
      React.createElement(
        "span",
        { style: linkStyle, onClick: openSite },
        "here"
      ),
      " to open the CheatingDaddy help site in your browser."
    )
  );
}
