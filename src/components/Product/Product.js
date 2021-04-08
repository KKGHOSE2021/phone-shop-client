import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Product = (props) => {
    const {name, model, price, imageUrl } = props.product;    
    const history = useHistory();
    const handleBuy = (price) =>{
        history.push(`/checkout/${price}`);
    }
    
    return (
        <div className="col mb-5 mx-3">
            <div class="card col-size">
                <img src={imageUrl} class="card-img-top img-thumbnail rounded" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{model}</p>
                        <div className="d-flex justify-content-between"> 
                        <h5 class="card-title">${price}</h5>
                        <button onClick={()=>handleBuy(price)} class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Product;