import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataUser = createAsyncThunk('user/getDataUser', async (paramsUser)=>{
    const result = await axios.post('https://ecommerce-api-8msr.onrender.com/user/login', {email: paramsUser[0], password: paramsUser[1]});
    if(result.status===200){
        console.log (result)
        return result.data
    }

} )

const initialState = {
    loading: false,
    error:'',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logoutUser: (state, action)=>{
            state.user = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder

        .addCase(getDataUser.fulfilled, (state, action)=>{
            state.user=action.payload;
        })
    }
})

export const {logoutUser} = userSlice.actions
export default userSlice.reducer