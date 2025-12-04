export default function HomeView() {
  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    if (!window.electronAPI) return;
    window.electronAPI.invoke("get-config").then((res) => {
      if (res.success) setConfig(res.config);
    });
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Home"),
    React.createElement("p", null, "React UI is working."),
    config
      ? React.createElement("p", null, "Current layout: " + config.layout)
      : null
  );
}
