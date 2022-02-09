import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepTwoReducerTypes {
    mail: string;
    phone: string;
}

const initialState = {
    mail: "",
    phone: "",
};

const stepTwoSlice = createSlice({
    name: "steptwo",
    initialState,
    reducers: {
        stepTwoAction(state, action: PayloadAction<StepTwoReducerTypes>) {
            console.log(action.payload);
            state.mail = action.payload.mail;
            state.phone = action.payload.phone;
        },
    },
});

export default stepTwoSlice.reducer;
export const { stepTwoAction } = stepTwoSlice.actions;
