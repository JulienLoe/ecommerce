import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser } from '../features/dataUserSlice';
import history from '../history';

const PageLogin = () => {
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.user)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const paramsUser = [];
    paramsUser.push(email, password);
    
    // const userDetail = [];
    // userDetail.push(user)

    const connection = async(e)=>{
        e.preventDefault();
        dispatch(getDataUser(paramsUser))
    }

    useEffect(()=>{
        if(user){
            // window.location.href = '/dispatch'
            history.push('/dispatch')
            localStorage.getItem('user') ? localStorage.getItem('user') : localStorage.setItem('user', JSON.stringify(user));
            console.log(user.user)
        }
    },[user])
    return (
        <div className='pageDispatch'>
            <Navbar />
            <div className='containerLogin'>
                <div className='formLogin'>
                    <form className='formLoginContainer'>
                    <div className='divEmail'>
                        <label for='email'>EMAIL</label>
                        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                    </div>
                    <div className='divPassword'>
                        <label for='password'>PASSWORD</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className='divbtnConnection'>
                        <button className='btnConnnection'onClick={connection}>CONNECTION</button>
                    </div>
                    <div className='divbtnConnection'>
                        <button className='btnRegister' ><Link to={'/register'}>REGISTER</Link></button>
                    </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default PageLogin;