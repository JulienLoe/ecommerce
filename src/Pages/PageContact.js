import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const PageContact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('')
    const send = (e)=>{
        e.preventDefault()
        console.log('ok')
        toast.success('SEND !')
    }
    return (<>
        <ToastContainer />
        <div className='pageContact'>
            <Navbar />
            <div className='containerLogin'>
           
                <div className='formLogin'>
                    <form className='formLoginContainer' onSubmit={send}>
                    <div className='divEmail'>
                        <label for='email'>EMAIL</label>
                        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)} required></input>
                    </div>
                    <div className='divPassword'>
                        <label for='name'>NAME</label>
                        <input type='name' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                    </div>
                    <div className='divPassword'>
                        <label for='message'>MESSAGE</label>
                        <textarea name='message' value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    </div>
                    <div className='divbtnConnection'>
                        <button className='btnConnnection' type='submit'>SEND</button>
                        
                    </div>
                    </form>
                    
                </div>
            </div>
            
        </div></>
    );
};

export default PageContact;