import axios from 'axios';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from "@material-ui/core/Input";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);
        const { name, model, price } = data;
        const product = {
            name: name,
            model: model,
            price: price,
            imageUrl: imageUrl
        };
        console.log("product", product)

        await fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your item saved in database.')
                }
            })
        reset();
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '06dbbd9b744a7e082c61a178327c6b58');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 bg-info p-3 text-white">
                    <p>Manage Phone Items</p>
                    <p>Add New Phone</p>
                    <p>Edit Existing Phone</p>
                </div>
                <div className="col-9 bg-light">
                    <div className="row mb-3 p-3"><h5>Add New Phone</h5></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">  
                        <div class="col-md-6">
                                <label class="form-label">Phone Name</label>
                                <input name="name" type="text" placeholder="Enter Name" ref={register} class="form-control"/>
                                </div>
                                <div class="col-md-6">
                                <label class="form-label">Phone Model</label>
                                <input name="model" type="text" placeholder="Enter Model" ref={register} class="form-control"/>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone Price</label>
                                <input name="price" type="number" placeholder="Enter Price" ref={register} class="form-control"/>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone Photo</label>
                                <input type="file" onChange={handleImageUpload} ref={register} class="form-control p-1"/>
                            </div>
                            <div class="col-12 mt-4 mb-5">
                            <button type="submit" class="btn btn-primary px-3">Save</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Admin;