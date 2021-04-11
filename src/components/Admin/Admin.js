import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import ManageProduct from './ManageProduct';
import AddProduct from './AddProduct';

const Admin = () => {
    const [showResults, setShowResults] = useState(false)
  
    return (
        <div className="container">
            <div className="row">
                <div id="list-example" class="col-3 bg-info p-3 list-group">
                    <a onClick={()=>setShowResults(false)}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-2"><FontAwesomeIcon icon={faPlus} /> Add Item</a>
                    <a onClick={()=>setShowResults(true)} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-1"><FontAwesomeIcon icon={faTasks} /> Manage Item</a>
                </div>

                <div className="col-9 bg-light">                    
                    { showResults ? <ManageProduct /> : <AddProduct /> }
                </div>
            </div>
        </div>

    );
};

export default Admin;