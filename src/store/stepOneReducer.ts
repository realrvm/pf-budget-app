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
    name: "test",
    initialState,
    reducers: {
        stepOneAction(state, action: PayloadAction<StepOneReducerTypes>) {
            state.lastName = action.payload.lastName;
            state.firstName = action.payload.firstName;
        },
    },
});

export type RootState = ReturnType<typeof stepOneSlice.reducer>;
export default stepOneSlice.reducer;
export const { stepOneAction } = stepOneSlice.actions;
