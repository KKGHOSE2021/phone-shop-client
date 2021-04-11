import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-chamber-54706.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const handleDeleteProduct = (id) => {
        console.log("deleteProduct", id);
        fetch(`https://still-chamber-54706.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleted successfully")
            })

    };


    return (
        <div className="d-flex justify-content-center"> 
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">                   
                <div id="list-item-1" class="container bg-light">
                    <h3 class="p-5 text-center">Manage Database Items</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Model</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            products.map(
                                product =>
                                    <tbody>
                                        <tr>
                                            <td>{product.name}</td>
                                            <td>{product.model}</td>
                                            <td>${product.price}</td>
                                            <td><button onClick={() => handleDeleteProduct(product._id)} className="bg-danger rounded"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                        </tr>
                                    </tbody>

                            )
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;