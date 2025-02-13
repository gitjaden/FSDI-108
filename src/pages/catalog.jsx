import { useState, useEffect } from 'react';
import DataService from '../services/DataService';

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        loadCategories();
    })

    function loadCategories() {
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
    }

    return (
        <div>
            <h1>Welcome to my Catalog</h1>

            <div className="catalog-items d-flex gap-3">
                {
                    products.map(item =>
                        <div  key={item._id}>
                            <div className="card ">
                                <img src={item.image} className="card-img-top " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Category: {item.category} </p>
                                    <p className="card-text">Price: {item.price} </p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Catalog;
