import { createSlice } from "@reduxjs/toolkit"

export const CalendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        view: 'calendar',
        citaSelect: {},
        citas: [],
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
        },
        setNewCita: (state, action) => {
            state.citas.push(action.payload);
        },
        deleteCitaById: (state, action) => {
            const indexToDelete = action.payload;
          
            if (indexToDelete >= 0 && indexToDelete < state.citas.length) {
              state.citas = state.citas.filter((cita, index) => index !== indexToDelete);
            } else {
              console.error('Índice de cita a eliminar fuera de rango.');
            }
          
            state.view = 'calendar';
          }
    }
});

export const {setView, setCitaSelect, setCitas, setError, setNewCita, deleteCitaById}=CalendarSlice.actions;
  