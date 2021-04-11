import React from 'react';
import './Product.css';
import {useHistory} from 'react-router-dom';

const Product = (props) => {
    const {_id, name, model, price, imageUrl } = props.product;        
    const history = useHistory();
    const handleBuy = (id) =>{               
        history.push(`/checkout/${id}`);
    }
    
    return (
        <div className="col mb-5 mx-3">
            <div class="card col-size">
                <img src={imageUrl} class="card-img-top img-thumbnail rounded" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text text-primary fw-bolder fs-1">{model}</p>
                        <div className="d-flex justify-content-between"> 
                        <h5 class="card-title">${price}</h5>
                        <button onClick={()=>handleBuy(_id)} class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Product;