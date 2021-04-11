import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(() => {
        fetch('https://still-chamber-54706.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


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

        await fetch('https://still-chamber-54706.herokuapp.com/addEvent', {
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
            <div className="d-flex justify-content-center">

                <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                    <h3 class="p-5 text-dark">Add New Phone</h3>             
                    <div class="col-md-6">
                        <label class="form-label">Phone Name</label>
                        <input name="name" type="text" placeholder="Enter Name" ref={register} class="form-control" />
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Phone Model</label>
                        <input name="model" type="text" placeholder="Enter Model" ref={register} class="form-control" />
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Phone Price</label>
                        <input name="price" type="number" placeholder="Enter Price" ref={register} class="form-control" />
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Phone Photo</label>
                        <input type="file" onChange={handleImageUpload} ref={register} class="form-control p-1" />
                    </div>

                    <div class="col-12 mt-4 mb-5">
                        <button type="submit" class="btn btn-primary px-3">Save</button>
                    </div>
                </form>
            </div>

    );
};

export default AddProduct;