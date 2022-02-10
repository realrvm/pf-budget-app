import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepOneReducerTypes {
    lastName: string;
    firstName: string;
}

const initialState = {
    lastName: "",
    firstName: "",
};

const stepOneSlice = createSlice({
    name: "stepone",
    initialState,
    reducers: {
        stepOneAction(state, action: PayloadAction<StepOneReducerTypes>) {
            state.lastName = action.payload.lastName;
            state.firstName = action.payload.firstName;
        },
    },
});

export default stepOneSlice.reducer;
export const { stepOneAction } = stepOneSlice.actions;
