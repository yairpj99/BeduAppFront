import { createSlice } from "@reduxjs/toolkit"

export const VeterinariosSlice = createSlice({
    name: 'veterinarios',
    initialState:{
        veterinarios: {},
        errorMessage: '',
    },
    reducers:{
        setVeterinarios:(state,action)=>{
            state.veterinarios=action.payload;
            state.errorMessage='';
        },
        setErrorMessage:(state,action)=>{
            state.errorMessage=action.payload;
        }
    }
});

export const {setVeterinarios, setErrorMessage}=VeterinariosSlice.actions;
  