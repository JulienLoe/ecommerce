import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataCart = createAsyncThunk('cart/getDataCart',async(utilityParams) =>{
    // const {paramsId, quantity} = utilityParams
    console.log(utilityParams)
    const result = await axios.get(`https://ecommerce-api-8msr.onrender.com/products/${utilityParams[0]}`)
// console.log(quantity)
    if(result.status===200){
        return (
        {
        image: result.data.image,
        name: result.data.name,
        numberInStock: result.data.numberInStock,
        quantity: utilityParams[1],
        price: result.data.price,
        size: result.data.size,
        idProduct: result.data._id,
        })
    }
    JSON.stringify(localStorage.setItem('cart', result));
        })

    

const initialState ={
    loading: false,
    error: '',
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    dispatch: localStorage.getItem('dispatch') ? JSON.parse(localStorage.getItem('dispatch')) : {}
};

//CartSlice

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        deleteCart: (state, action)=>{
            state.cart=state.cart.filter((element)=>element.idProduct!==action.payload)
        },
        dipatchInfo: (state, action)=>{
            state.dispatch = action.payload;
        },
        resetCart: (state,action)=>{
            state.cart.cart = action.payload;
        }
    },
    extraReducers: (builder) =>{builder
        .addCase(getDataCart.pending, (state, action)=>{
            state.loading = true;
        })

        .addCase(getDataCart.fulfilled, (state, action)=>{
            state.loading = false;
            const payload = [];
            payload.push(action.payload)
            const index = state.cart.findIndex((element)=> element.idProduct===action.payload.idProduct)
            if(state.cart.find((element)=>element.idProduct===action.payload.idProduct)){
            state.cart[index].quantity = action.payload.quantity;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
            else
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        })

        .addCase(getDataCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const {resetCart} = cartSlice.actions
export const {dipatchInfo} = cartSlice.actions
export const {deleteCart} = cartSlice.actions
export default cartSlice.reducer

