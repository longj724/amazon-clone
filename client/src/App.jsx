import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar.jsx';
import ProductCard from "./components/ProductCard";



function App() {
    const [products, setProducts] = useState([])

    let getInfo = () => {
        fetch('/api/getInfo')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data)
            });
    };

    return (
        <div>
            <button onClick={getInfo}>Get Products</button>
            {products.map((product) => (<ProductCard id={product.id} name={product.name} details={product.details} key={product.id}/>))}
        </div>
    );
}

export default App;
