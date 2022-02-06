import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import {Layout} from "./Layout"

const Budget = React.lazy(() => import("../pages/budget/Budget"));
const LoginForm = React.lazy(() => import("../pages/login-form/LoginForm"));

const App = () => {
    return (
        <Suspense fallback={<>Загружается...</>}>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="/budget" element={<Budget />} />
                <Route path="/login-form" element={<LoginForm />} />
            </Routes>
        </Suspense>
    );
};

export default App;
