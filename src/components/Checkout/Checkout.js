import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const {id} = useParams();   
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const url = `https://still-chamber-54706.herokuapp.com/checkout/${id}`; 
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])


    const handleCheckout = (id) => {
        const orderDetails = {...loggedInUser, name: product.name, model: product.model, price: product.price, orderTime: new Date()};        
        
         fetch(`https://still-chamber-54706.herokuapp.com/addOrder`,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(orderDetails)
         });
         history.push(`/orders`);
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
                        <td>{product.name}</td>
                        <td>{product.model}</td>
                        <td>1</td>
                        <td>${product.price}</td>
                    </tr> 
                </tbody>
            </table>
            <button onClick={()=>handleCheckout('id')} class="mt-5 btn btn-primary float-right">Checkout</button>
        </div>
    );
};

export default Checkout;