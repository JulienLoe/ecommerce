import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Video from '../Icons/video.mp4'


const Home = () => {
    const data = useSelector((state) => state.products.products)

useEffect(() =>{
    console.log(data)
},[])
    return (
        <div>
            <div className='containerHome'>
            <Navbar />
            <button className='btnEnter'><Link to={'/products'} >START YOUR SHOPPING</Link></button>
            <ReactPlayer playing muted loop url={Video} width='100%' height='100%' className='video' />
            </div>
        </div>
    );
};

export default Home;