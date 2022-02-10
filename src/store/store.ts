import { configureStore, combineReducers } from "@reduxjs/toolkit";

import stepOneReducer from "./stepOneReducer";
import stepTwoReducer from "./stepTwoReducer";
import stepThreeReducer from "./stepTreeReducer";

const rootReducer = combineReducers({ stepTwoReducer, stepOneReducer, stepThreeReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
export type RootState = ReturnType<typeof rootReducer>;
