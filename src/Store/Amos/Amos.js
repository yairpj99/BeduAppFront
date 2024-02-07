import { createSlice } from "@reduxjs/toolkit"

export const AmosSlice = createSlice({
    name: 'amos',
    initialState:{
        view: 'amos',
        amos: {},
        errorMessage: '',
    },
    reducers:{
        setAmos:(state,action)=>{
            state.amos=action.payload;
        },
        setErrorMessage:(state,action)=>{
            state.errorMessage=action.payload;
        }
    }
});

export const {setAmos, setErrorMessage}=AmosSlice.actions;