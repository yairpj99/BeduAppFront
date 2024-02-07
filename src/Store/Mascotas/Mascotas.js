import { createSlice } from "@reduxjs/toolkit"

export const MascotasSlice = createSlice({
    name: 'mascotas',
    initialState:{
        view: 'mascotas',
        mascotas: {},
        errorMessage: '',
    },
    reducers:{
        setMascotas:(state,action)=>{
            state.mascotas=action.payload;
        },
        setErrorMessage:(state,action)=>{
            state.errorMessage=action.payload;
        }
    }
});

export const {setMascotas, setErrorMessage}=MascotasSlice.actions;