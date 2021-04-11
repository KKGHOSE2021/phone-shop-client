import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://still-chamber-54706.herokuapp.com/orderPlacedByEmail?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, [])


    return (
        <div class="container">
            <h3 class="mb-5 text-center">Your have made the following order</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>                        
                    </tr>
                </thead>
                {
                    products.map ( 
                        product =>   
                        <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.model}</td>
                            <td>1</td>
                            <td>${product.price}</td>
                            <td>{new Date(product.orderTime).toString()}</td>
                        </tr> 
                    </tbody>               
                        
                    )
                }

            </table>            
        </div>
    );
    
};

export default Order;