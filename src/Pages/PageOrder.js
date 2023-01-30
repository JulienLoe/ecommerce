import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconUserOrder from '../Icons/iconUserOrder.png'
import iconAddress from '../Icons/iconAddress.png'
import Navbar from '../Components/Navbar';
import { orderPost } from '../features/orderSlice';
import { resetCart } from '../features/dataCartSlice';
import { useNavigate } from 'react-router-dom';

const PageOrder = () => {
    const history = useNavigate();
    const cart = useSelector((state)=>state.cart.cart)
    console.log(cart)
    const dispatchInfo = useSelector((state)=>state.cart.dispatch)
    const user = useSelector((state)=>state.user.user)
    const id = useSelector((state)=>state.order.order._id)
    const validation = useSelector((state)=>state.order.order.user)
    const dispatch = useDispatch();
    console.log(cart)
    const elementPrice = cart.reduce((a,b)=> a + b.quantity * b.price,0 ).toFixed(2);
    const tva = ((20/100) * elementPrice).toFixed(2);
    console.log(tva)
    const shipping = 7.99;
    const total = (Number(tva) + Number(elementPrice) + shipping).toFixed(2);

    const validationOrder = (e)=>{
        e.preventDefault();
        dispatch(orderPost({elementPrice, tva, shipping, total, cart, user, dispatchInfo}))
        resetCart({})
    }

    useEffect(()=>{
        if(validation){
            history(`orderPay/${id}`)
            // window.location.href = `orderPay/${id}`
            // localStorage.removeItem('cart');
        }
    },[validation, id])
    
    return (
        <>
        <Navbar />
        <div className='cartContainerOrder'>
            {/* <div className='userOrderDiv'><img alt='user' src={iconUserOrder}></img></div> */}
            <div className='addressDiv'><div className='addressImgDiv'><img alt='address' src={iconAddress}></img></div>
            <div>
                <h3>{'ADDRESS:'}</h3>
                {dispatchInfo.address}
                <h3>{'CITY:'}</h3>
                {dispatchInfo.address}
                <h3>{'POSTAL CODE:'}</h3>
                {dispatchInfo.address}
                <h3>{'PHONE:'}</h3>
                {dispatchInfo.address}
                <h3>{'COUNTRY:'}</h3>
                {dispatchInfo.address}
            </div>
            <div className='userOrderDiv'><img alt='user' src={iconUserOrder}></img><div><h3 className='userTitle'>{'NAME: ' + user.name}</h3><h3 className='userTitle'>{'EMAIL: ' + user.email}</h3></div></div>
            </div>
        <div className='calculateCart'><div className='shipping'>{'TOTAL ' + elementPrice + ' €'}</div><div className='shipping'>{'SHIPPING ' + shipping + ' €'}</div><div className='tva'>{'TVA ' + tva + ' €'}</div><div className='totalPriceOrder'>{'TOTAL ' + total + ' €'}</div></div>
            {cart.map((element)=>{
                return(
                    <>
                <div className='cart'>
                    <div className='containerImgOrder'>
                        <img src={'.' + element.image} alt={element.name}/>
                    </div>
                    <div className='elementCart'><h1>{element.name}</h1><h3>{element.size}</h3><h3>{element.price + ' €'}</h3><h3>{element.quantity}</h3></div>
                    <div>{element.quantity * element.price + ' €'}</div>
                </div>
                </>)
            })}
            <div className='btnOrderDiv'>
            <button className='btnOrderValidation' type='submit' onClick={validationOrder}>ORDER</button>
            </div>
            
        </div>
        </>
    );
};

export default PageOrder;