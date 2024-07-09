import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    currentUser: null,
    error:null,
    loading: false,
};

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure: (state, action)=> {
            state.error = action.payload;
            state.loading=false;
        },
        updateUserStart:(state) =>{
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading=false;
            state.error= null;
        },
        updateUserFailure:(state, action) =>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserStart: (state) =>{
            state.loading=true;
        },
        deleteUserSuccess:(state) =>{
            state.currentUser = null;
            state.loading=false;
            state.error=null;
        },
        deleteFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {signInStart , signInSuccess , signInFailure, 
    updateUserFailure,updateUserSuccess, updateUserStart,
     deleteFailure, deleteUserSuccess, deleteUserStart}= UserSlice.actions;


export default UserSlice.reducer;