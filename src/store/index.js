import {configureStore} from "@reduxjs/toolkit"
import AuthSclice from "./AuthSclice"
import ActivationSlice from "./ActivationSlice"

export const store= configureStore({
    reducer: {
        AuthSclice,
        ActivationSlice
    }
})