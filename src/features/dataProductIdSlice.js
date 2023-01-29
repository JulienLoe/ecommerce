import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataId = createAsyncThunk('productId/getDataId', async(params) =>{
    const result = await axios.get(`https://ecommerce-api-8msr.onrender.com/products/${params}`)
    if(result.status===200){
        return result.data
    }
    else
    return (error)=>console.log(error)
})

const initialState = {
    loading: true,
    error: '',
    products: []
}

// SingleProduct

const productIdSlice = createSlice({
    name: 'productId',
    initialState,
    reducer: {

    },
    extraReducers: (builder) =>{builder


.addCase(getDataId.pending, (state) =>{state.loading = true})

.addCase(getDataId.fulfilled, (state, action) =>{
    state.loading = false
    state.products = action.payload
})

.addCase(getDataId.rejected, (state, action) =>{
    state.loading = false
    state.error = action.error.message
})
    }

})

export default productIdSlice.reducer