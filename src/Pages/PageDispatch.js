import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { dipatchInfo } from '../features/dataCartSlice';

const PageDispatch = () => {
const dispatch = useDispatch();

const [address, setAdrress] = useState('');
const [city, setCity] = useState('');
const [postalCode, setPostalCode] = useState('');
const [phone, setPhone] = useState('');
const [country, setCountry] = useState('');

const history = useNavigate();
const dispatchParams = {address, city, postalCode, phone, country} 

const validationInfoDispatch = (e)=>{
    e.preventDefault();
    console.log(address)
    dispatch(dipatchInfo(dispatchParams));
    localStorage.setItem('dispatch', JSON.stringify(dispatchParams))
    history('/order');
    // window.location.href = '/order'
    console.log(address)
}
    return (
        <div className='pageDispatch'>
            <Navbar />
            <div className='containerLogin'>
                <div className='formLogin'>
                    <form className='form' onSubmit={validationInfoDispatch}>
                    <div className='firstDiv'>
                        <label htmlFor='address'>ADDRESS</label>
                        <input name='address' value={address} required onChange={(e) =>setAdrress(e.target.value)}></input>
                    </div>
                    <div className='divAddress'>
                        <label htmlFor='city'>CITY</label>
                        <input type='text' value={city} required onChange={(e) =>setCity(e.target.value)}></input>
                    </div>
                    <div className='divAddress'>
                        <label for='password'> POSTAL CODE</label>
                        <input type='number' value={postalCode} required onChange={(e)=>setPostalCode(e.target.value)}></input>
                    </div>
                    <div className='divAddress'>
                        <label htmlFor='phone'>PHONE</label>
                        <input type='number' value={phone} required onChange={(e)=>setPhone(e.target.value)}></input>
                    </div>
                    <div className='divAddress'>
                        <label htmlFor='country'>COUNTRY</label>
                        <input type='text' value={country} required onChange={(e)=>setCountry(e.target.value)}></input>
                    </div>
                    <div className='divbtnConnection'>
                        <button className='btnConnnection' type='submit' >VALIDATION</button>
                    </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default PageDispatch;