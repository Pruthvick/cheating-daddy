import App from "./App.js";

// React & ReactDOM are loaded globally from index.html
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(React.createElement(App));

