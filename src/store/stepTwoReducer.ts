import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepTwoReducerTypes {
    mail: string;
}

const initialState = {
    mail: "",
};

const stepTwoSlice = createSlice({
    name: "steptwo",
    initialState,
    reducers: {
        stepTwoAction(state, action: PayloadAction<StepTwoReducerTypes>) {
            state.mail = action.payload.mail;
        },
    },
});

export default stepTwoSlice.reducer;
export const { stepTwoAction } = stepTwoSlice.actions;
