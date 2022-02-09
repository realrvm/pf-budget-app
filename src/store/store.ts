import { configureStore, combineReducers } from "@reduxjs/toolkit";

import stepOneReducer from "./stepOneReducer";
import stepTwoReducer from "./stepTwoReducer";

const rootReducer = combineReducers({ stepTwoReducer, stepOneReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
export type RootState = ReturnType<typeof rootReducer>;
