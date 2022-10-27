import React from "react"
import ReactDOM from "react-dom/client"

import StylesReset from "./Styles/Reset";
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<StylesReset />
    <App />
  </React.StrictMode>
);