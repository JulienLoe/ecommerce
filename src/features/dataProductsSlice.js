import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('products/getData', async() =>{
    const result = await axios.get('http://localhost:8080/products')
    if(result.status===200){
        console.log(result)
        return result.data
    }
})

const initialState = {
    loading: true,
    error: '',
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
     reducers: {
    //     getData: (state, action) =>{
    //         state.products = action.payload
        },
    
    extraReducers: (builder) =>{
        builder

        // ListProducts

        .addCase(getData.pending, (state)=>{state.loading = true})
        
        .addCase(getData.fulfilled, (state,action) =>{
            console.log(action)
            state.loading = false
            state.products = action.payload})

        .addCase(getData.rejected, (state,action) =>{
            state.loading = false
            state.error = action.error.message
            console.log(action.error.message)
        })

        
        }
    }
    
)

// export {getData} = productsSlice.actions
export default productsSlice.reducer