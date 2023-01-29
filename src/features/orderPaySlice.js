import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrderPay = createAsyncThunk('order/getOrderpay', async(id)=>{
    const result = await axios.get(`https://ecommerce-api-8msr.onrender.com/order/${id}`)
    if(result.status===200){
        console.log('ok')
        return result.data
    }
} )

const initialState = {
    loading: false,
    error: '',
    order: []
}

const orderPaySlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{builder

        .addCase(getOrderPay.pending, (state, action)=>{
            state.loading = false;
        })

        .addCase(getOrderPay.fulfilled, (state,action)=>{
            state.loading = false;
            state.order = action.payload;
        })

        .addCase(getOrderPay.rejected, (state, action)=>{
            state.error = action.error.message;
        })
    }
})


export default orderPaySlice.reducer