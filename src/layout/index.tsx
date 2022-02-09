import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { StepOne, StepTwo, StepThree } from "../pages/login-form/components/";

const Budget = React.lazy(() => import("../pages/budget/Budget"));
const LoginForm = React.lazy(() => import("../pages/login-form/LoginForm"));

const App = () => {
    return (
        <Suspense fallback={<>Загружается...</>}>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="budget" element={<Budget />} />
                <Route path="login-form" element={<LoginForm />}>
                    <Route path="" element={<StepOne />} />
                    <Route path="steptwo" element={<StepTwo />} />
                    <Route path="stepthree" element={<StepThree />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
