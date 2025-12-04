import DashboardView from "./views/DashboardView.js";
import CustomizeView from "./views/CustomizeView.js";
import AssistantView from "./views/AssistantView.js";
import HistoryView from "./views/HistoryView.js";
import HelpView from "./views/HelpView.js";

export default function App() {
  const [currentView, setCurrentView] = React.useState("dashboard");
  const [statusText, setStatusText] = React.useState("Ready");
  const [config, setConfig] = React.useState(null);

  // Load config once
  React.useEffect(function () {
    if (!window.electronAPI) return;
    window.electronAPI.invoke("get-config").then(function (res) {
      if (res && res.success) {
        setConfig(res.config);
      }
    });
  }, []);

  function handleQuit() {
    if (!window.electronAPI) return;
    window.electronAPI.invoke("quit-application");
  }

  function handleOpenHelpSite() {
    if (!window.electronAPI) return;
    window.electronAPI.invoke("open-external", "https://cheatingdaddy.com/help");
  }

  function renderView() {
    const commonProps = { config: config, setStatusText: setStatusText };

    if (currentView === "dashboard") {
      return React.createElement(DashboardView, commonProps);
    }
    if (currentView === "customize") {
      return React.createElement(CustomizeView, commonProps);
    }
    if (currentView === "assistant") {
      return React.createElement(AssistantView, commonProps);
    }
    if (currentView === "history") {
      return React.createElement(HistoryView, commonProps);
    }
    if (currentView === "help") {
      return React.createElement(HelpView, {
        onOpenHelpSite: handleOpenHelpSite,
      });
    }
    return React.createElement(DashboardView, commonProps);
  }

  // Reuse the theme variables declared in <style> of index.html
  const containerStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: "var(--background-transparent)",
    color: "var(--text-color)",
  };

  const headerStyle = {
    background: "var(--header-background)",
    padding: "var(--header-padding)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid var(--border-color)",
  };

  const headerLeftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const headerTitleStyle = {
    fontSize: "var(--header-font-size)",
    fontWeight: 600,
  };

  const headerRightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "var(--header-font-size-small)",
  };

  const statusStyle = {
    opacity: 0.8,
    fontSize: "var(--header-font-size-small)",
  };

  const headerButtonStyle = {
    padding: "var(--header-button-padding)",
    borderRadius: "6px",
    border: "1px solid var(--button-border)",
    background: "var(--button-background)",
    color: "var(--header-actions-color)",
    cursor: "pointer",
  };

  const mainOuterStyle = {
    flex: 1,
    padding: "var(--main-content-padding)",
    marginTop: "var(--main-content-margin-top)",
  };

  const mainCardStyle = {
    height: "100%",
    borderRadius: "var(--content-border-radius)",
    background: "var(--main-content-background)",
    border: "1px solid var(--border-color)",
    padding: "16px",
    overflow: "auto",
  };

  return React.createElement(
    "div",
    { style: containerStyle },

    // Header
    React.createElement(
      "div",
      { style: headerStyle },
      // Left – title + status
      React.createElement(
        "div",
        { style: headerLeftStyle },
        React.createElement("div", { style: headerTitleStyle }, "CheatingDaddy (React)"),
        React.createElement("div", { style: statusStyle }, statusText)
      ),
      // Right – nav buttons + quit
      React.createElement(
        "div",
        { style: headerRightStyle },
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: function () {
              setCurrentView("dashboard");
            },
          },
          "Main"
        ),
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: function () {
              setCurrentView("customize");
            },
          },
          "Customize"
        ),
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: function () {
              setCurrentView("assistant");
            },
          },
          "Assistant"
        ),
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: function () {
              setCurrentView("history");
            },
          },
          "History"
        ),
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: function () {
              setCurrentView("help");
            },
          },
          "Help"
        ),
        React.createElement(
          "button",
          {
            style: headerButtonStyle,
            onClick: handleQuit,
          },
          "Quit"
        )
      )
    ),

    // Main content
    React.createElement(
      "div",
      { style: mainOuterStyle },
      React.createElement("div", { style: mainCardStyle }, renderView())
    )
  );
}
