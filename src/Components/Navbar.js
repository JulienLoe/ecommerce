import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconeSearch from '../Icons/iconSearch.png'
import iconeBasket from '../Icons/iconsBasket2.png'
import iconeUser from '../Icons/iconUser2.png'
import iconeLogout from '../Icons/iconLogout.png'
import iconeUserValidation from '../Icons/iconUserValidation.png'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/dataUserSlice';

const Navbar = (props) => {
    const [searchBar,  setSearchBar] = useState('')
    const user = useSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    const location = window.location.href
    let detailUser = false;
    let viewNavSearch = false
    if(location==='http://localhost:3000/products'){viewNavSearch = true}
    console.log(location)
    console.log(user)
    if(user!==null){
        detailUser = user
    }
    const logout = ()=>{
        localStorage.removeItem('user');
        dispatch(logoutUser(null))
    }

  
    return (
        <>
        { detailUser ? (
                
    <div className='containerNavbar'>
        <div className='navbar'>
            <ul>
                <NavLink to='/' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/products' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Products</li>
                </NavLink>
                <NavLink to='/contact' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
            <ul className='navUserBasket'>    
                    <img alt='userValidation' src={iconeUserValidation}></img>
                    <i>
                        {detailUser.name}
                    </i>
                
                <NavLink to='/' >
                    <li className='logout' onClick={logout}><img src={iconeLogout} alt='Logout' /></li>
                </NavLink>
                <NavLink to='/cart' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li><img src={iconeBasket} alt='Basket' /></li>
                </NavLink>
            </ul>
            
        </div>
        {viewNavSearch ?(
        <div className='navSearch'>
            <input className='inputSearch' type='text' onChange={(e)=>props.search(e.target.value)}></input>
            <button className='btnSearch' type='submit'><img src={iconeSearch} alt='Loupe'/></button>
        </div>):<div></div>}
        
    </div>
        ):(
            <div className='containerNavbar'>
        <div className='navbar'>
            <ul>
                <NavLink to='/' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/products' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Products</li>
                </NavLink>
                <NavLink to='/contact'className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
            <ul className='navUserBasket'>    
                <NavLink to='/login' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li><img src={iconeUser} alt='User' /></li>
                </NavLink>
                <NavLink to='/cart' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li><img src={iconeBasket} alt='Basket' /></li>
                </NavLink>
            </ul>
            
        </div>
        {viewNavSearch ?(
        <div className='navSearch'>
            <input className='inputSearch' type='text'></input>
            <button className='btnSearch' type='submit'><img src={iconeSearch} alt='Loupe'/></button>
        </div>):<div></div>}
        
    </div>
        )}
        </>
    );
};

export default Navbar;