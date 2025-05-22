import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    appointments: [

    ],
};

const confirmAppointmentSlice = createSlice({
    name: 'confirmAppointment',
    initialState,
    reducers: {
        setAppointment: (state, action) => {
            const data = [...state.appointments, action.payload];
            return {
                ...state,
                appointments: data,
            };
        },
        resetAppointments: (state, action) => {
            state.appointments = initialState.appointments;
        },
        updateAppointments: (state, action) => {
            return {
                ...state,
                appointments: state.appointments.map((appointment) => {
                    if(appointment?.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return appointment;
                    }
                }),
            };
        },
    },
});

export const { setAppointment, resetAppointments, updateAppointments } = confirmAppointmentSlice.actions;

export const selectGetSetAppointment = (state: RootState) => state.confirmAppointment.appointments;

export default confirmAppointmentSlice;
