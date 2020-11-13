import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar.jsx';
import ProductCard from "./components/ProductCard";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./pages/About";
import ProductListing from "./pages/ProductListing";



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
        <Router>
            <Switch>
                <Route path={"/about"}>
                    <About/>
                </Route>

                <Route path={"/cart"}>
                    <p>the cart page will go here</p>
                </Route>

                <Route path={"/products"}>
                    <ProductListing products={products}/>
                </Route>

                <Route path={"/"}>
                    <ProductCard
                        id={"1234"}
                        name={"Blue gilled fire"}
                        details={"kills you painfully"}
                    />
                    <div>
                        <button onClick={getInfo}>Get Products</button>
                        {products.map((product) => (<ProductCard id={product.id} name={product.name} details={product.details} key={product.id}/>))}
                    </div>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
