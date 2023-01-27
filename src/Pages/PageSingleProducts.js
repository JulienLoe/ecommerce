import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { getDataId } from '../features/dataProductIdSlice';

const PageSingleProducts = () => {
    const dispatch = useDispatch();

    const result = useSelector((state) => state.productsId.products)

    const productsId = [];

    productsId.push(result);

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1)

    const handleSubmitCart = (e)=>{
        e.preventDefault();
        navigate(`/cart/${params.id}?${quantity}`)
    }

   

    

    const params = useParams();
    
    useEffect(()=>{
        dispatch(getDataId(params.id))
        // console.log(params)
        // console.log(productId)
    },[dispatch, params.id])

    return (
        <div>
            <Navbar />
            <div id='gridSingle'>
            {productsId.map((element) =>{
                return(<>
                <div className='grid-pictSingle'><img src={'.' + element.image} alt={element.description}/></div>
                <div className='containerDivInfoSingle'>
                <div className='divInfoSingle'><h1>{element.name}</h1></div>
                <div className='divInfoSingle'><h2>{element.price}{' €'}</h2></div>
                <div className='divInfoSingle'><h2>{'Size'}</h2><h3>{element.size}</h3></div>
                
                    {element.numberInStock>=1 ?(
                        <>
                        <div className='divInfoSingle'>
                    <select className='selectSingle' value={quantity} onChange={(e) =>setQuantity(e.target.value)}>
                        {[...Array(element.numberInStock).keys()].map((element)=><option value={element + 1}>{element + 1}</option>)}
                    </select></div>
                <div className='divInfoSingleBtn'><button className='buttonSingle' onClick={(quantity)=>handleSubmitCart(quantity)}>ADD TO CART</button></div></>):(<h2>UNAVAIHABLE</h2>)}
                </div>
                

                </>)
            })}
            </div>
        </div>
    );
};

export default PageSingleProducts;