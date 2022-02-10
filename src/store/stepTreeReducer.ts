import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stepThreeTypes {
    id: string;
    name?: string;
}

const initialState: stepThreeTypes[] = [];

const stepThreeSlice = createSlice({
    name: "stepthree",
    initialState,
    reducers: {
        addFile(state, action: PayloadAction<stepThreeTypes[]>) {
            state.push(...action.payload);
        },
        deleteFile(state, action: PayloadAction<stepThreeTypes>) {
            state.splice(
                state.findIndex((file) => file.id === action.payload.id),
                1
            );
        },
    },
});

export default stepThreeSlice.reducer;
export const { addFile, deleteFile } = stepThreeSlice.actions;
