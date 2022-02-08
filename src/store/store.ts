import { configureStore } from "@reduxjs/toolkit";

import stepOneReducer from "./stepOneReducer";

const store = configureStore({ reducer:  stepOneReducer });

export default store;
