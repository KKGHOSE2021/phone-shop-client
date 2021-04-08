import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const {price} = useParams();   

    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${price}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [products])

    const handleCheckout = (price) => {
        const orderDetails = {...loggedInUser, name: products.name, model: products.model, price: products.price, orderTime: new Date()};        
        
         fetch(`http://localhost:5000/addOrder`,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(orderDetails)
         })
         .then(res=>res.json())
         .then(data=>{             
             if(data){
                history.push(`/orders`);             
            }
         })
     };
     
    return (
        <div class="container">
            <h3 class="mb-5 text-center">Checkout</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{products.name}</td>
                        <td>{products.model}</td>
                        <td>1</td>
                        <td>${products.price}</td>
                    </tr> 
                </tbody>
            </table>
            <button onClick={()=>handleCheckout(price)} class="mt-5 btn btn-primary float-right">Checkout</button>
        </div>
    );
};

export default Checkout;