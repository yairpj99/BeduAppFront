import { createSlice } from "@reduxjs/toolkit"

export const CalendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        view: 'calendar',
        citaSelect: {},
        citas: {},
        errorMessage: '',
    },
    reducers:{
        setView:(state,action)=>{
            state.view=action.payload;
        },
        setCitaSelect:(state,action)=>{
            state.citaSelect=action.payload;
        },
        setCitas:(state,action)=>{
            state.citas=action.payload;
            state.errorMessage='';
        },
        setError:(state,action)=>{
            state.errorMessage=action.payload;
        }
    }
});

export const {setView, setCitaSelect, setCitas, setError}=CalendarSlice.actions;
  