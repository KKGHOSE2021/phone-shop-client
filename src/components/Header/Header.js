import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';

const Header = () => {
    return (
        <div class="container mt-5">
            <div className="row align-items-center mb-5">
                <div className="col justify-content-start">
                <img className="logo" src={logo} alt="" srcset="" width="100" height="100"/>
                         
                </div>

                    <div className="col d-flex justify-content-end fw-bold">
                        <Link to="/home" className="nav-link text-dark">Home</Link>
                        <Link to="/orders" className="nav-link text-dark">Orders</Link>
                        <Link to="/admin" className="nav-link text-dark">Admin</Link>
                        <Link to="/home" className="nav-link text-dark">Deals</Link>
                        <Link to="/login" className="nav-link bg-primary rounded px-3 text-white">Login</Link>
                    </div>
                </div>
            </div>
    );
};

export default Header;