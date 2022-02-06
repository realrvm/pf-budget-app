import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./layout";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Router basename="/samples">
                <App />
            </Router>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
