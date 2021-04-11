import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://still-chamber-54706.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [products])

    return (
        <div className="container">
            <div className="row">
                {
                products.length === 0 && <CircularProgress color="primary" alignItems="center" justifyContent="center"/>                    
                }                
                {products.map(product => <Product product={product}/>)}                
            </div>
        </div>
    );
};

export default Home;