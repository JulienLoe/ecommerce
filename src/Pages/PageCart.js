import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { getDataCart } from '../features/dataCartSlice';
import { deleteCart } from '../features/dataCartSlice';
import iconTrash from '../Icons/iconTrash.png';

const PageCart = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const paramsId = params.id;
    const quantity = window.location.search.split('?')[1];
    const utilityParams = useMemo(() =>[paramsId, quantity],[paramsId,quantity])
    const cart = useSelector((state)=>state.cart.cart);
    console.log(utilityParams[1])
    const getQuantity = (e,id)=>{
        e.preventDefault()
        
        console.log(e.target.value)
        console.log(utilityParams)
        dispatch(getDataCart([id,e.target.value]))

    }

    const deleteClickCart = (e,id)=>{
        e.preventDefault();
        dispatch(deleteCart(id));
    }

    const totalArticle = cart.reduce((a,b)=> a + b.quantity,0);

    console.log(totalArticle)

    const elementPrice = cart.reduce((a,b)=> a + b.quantity * b.price,0 ).toFixed(2);

    console.log(elementPrice)

    useEffect(()=>{
        dispatch(getDataCart(utilityParams))
    }, [dispatch,utilityParams])
    return (
        <>
        <Navbar />
        <div className='cartContainer'>
        <div className='validationCart'><div className='numberArticle'>{'Number Articles: ' + cart.length}</div><div className='totalPrice'>{'TOTAL ' + elementPrice + ' €'}</div><button className='btnValidationCart'><Link to={'/login'}>VALIDATION CARD</Link></button><button className='btnRedirectShop'><Link to='/products'>Continue to shopping</Link></button></div>
            {cart.map((element)=>{
                return(
                    <>
                <div className='cart'>
                    <div className='containerImg'>
                        <img src={'.' + element.image} alt={element.name}/>
                    </div>
                    <div className='elementCart'><h1>{element.name}</h1><h3>{element.size}</h3><h3>{element.price + ' €'}</h3><h3>{element.quantity}</h3></div>
                    <select className='selectSingle' value={element.quantity} onChange={(e) =>getQuantity(e,element.idProduct)}>
                        {[...Array(element.numberInStock).keys()].map((element)=><option key={element+1} value={element + 1}>{element + 1}</option>)}
                    </select>
                    <div>{(element.quantity * element.price).toFixed(2) + ' €'}</div>
                    <i onClick={(e)=>deleteClickCart(e,element.idProduct)}><img className='trash' alt={element.name} src={iconTrash}/></i>
                </div>
                </>)
            })}
            
        </div>
        </>
    );
};

export default PageCart;