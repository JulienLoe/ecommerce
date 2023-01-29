import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const orderPost = createAsyncThunk('order/orderpost', async(order)=>{
    const result = await axios.post('https://ecommerce-api-8msr.onrender.com/order/order', order)
    if(result.status===200){
        return result.data
    }
} )

const initialState = {
    loading: false,
    error: '',
    order: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{builder

        .addCase(orderPost.pending, (state, action)=>{
            state.loading = false;
        })

        .addCase(orderPost.fulfilled, (state,action)=>{
            state.loading = false;
            state.order = action.payload;
        })

        .addCase(orderPost.rejected, (state, action)=>{
            state.error = action.error.message;
        })
    }
})


export default orderSlice.reducer