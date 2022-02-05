import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import {Layout} from "./Layout"

const Budget = React.lazy(() => import("../pages/Budget"));

const App = () => {
    return (
        <Suspense fallback={<>Загружается...</>}>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="/budget" element={<Budget />} />
            </Routes>
        </Suspense>
    );
};

export default App;
