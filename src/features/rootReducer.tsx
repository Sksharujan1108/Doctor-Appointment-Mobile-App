import { combineReducers } from "@reduxjs/toolkit";
import confirmAppointmentSlice from "./slices/confirmppointment";


const rootReducer = combineReducers({
    confirmAppointment: confirmAppointmentSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
