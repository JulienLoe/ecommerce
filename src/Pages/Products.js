import React, { useState } from 'react';
import Grid from '../Components/Grid';
import Navbar from '../Components/Navbar';

const Products = () => {
    const [dataSearch, setDataSearch ] = useState('')
    return (
        <div>
            <Navbar search={dataSearch=>setDataSearch(dataSearch)}/>
            <Grid dataSearch={dataSearch}/>
        </div>
    );
};

export default Products;