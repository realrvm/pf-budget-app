import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";
import App from "./layout";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Router basename="/samples">
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </Router>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
