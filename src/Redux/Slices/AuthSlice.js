import {createSlice} from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

const authlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
});

// export const {}=authlice.actions;
export default authlice.reducer;