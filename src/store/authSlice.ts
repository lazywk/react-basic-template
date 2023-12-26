import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "utils/interfaces/state";

const initialState: AuthState = {
    token: '',
    signedIn: !true
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.signedIn = true
            state.token = action.payload
        },
        logoutSuccess: (state) => {
            state.signedIn = false
            state.token = ''
        }
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer