import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { getDataUser } from '../features/dataUserSlice';

const PageRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.user)
    const paramsUser = [];
    paramsUser.push(email, password);

    const formRegister = async(e)=>{
        e.preventDefault();
        const user = {name, email, password}
        const result = await axios.post('https://ecommerce-api-8msr.onrender.com/user/register', user);
        if(result.status===200){
            try{
            console.log('Created user !')
            console.log(result.data)
            dispatch(getDataUser(paramsUser))
        }
            
            catch (error){console.error(error)}
            setMessage(result.data.error)
        }
        

    }

    useEffect(()=>{
        if(user){
            window.location.href='/dispatch'
            localStorage.getItem('user') ? localStorage.getItem('user') : localStorage.setItem('user', JSON.stringify(user));
        }
    },[user])

    return (
        <div>
            <Navbar />
            <div className='containerLogin'>
                <div className='formLogin' onSubmit={formRegister}>
                    <form className='form'>
                    <div className='divName'>
                        <label htmlFor='name'>NAME</label>
                        <input name='name' value={name} onChange={(e) =>setName(e.target.value)}></input>
                    </div>
                    <div className='divEmail'>
                        <label for='email'>EMAIL</label>
                        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                        <span>{message}</span>
                    </div>
                    <div className='divPassword'>
                        <label for='password'>PASSWORD</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className='divbtnConnection'>
                        <button className='btnConnnection' type='submit' >REGISTER</button>
                    </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default PageRegister;