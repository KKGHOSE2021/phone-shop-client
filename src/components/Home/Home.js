import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [products])

    return (
        <div className="container">
            <div className="row">                
                {products.map(product => <Product product={product}/>)}                
            </div>
        </div>
    );
};

export default Home;