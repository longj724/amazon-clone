import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar.jsx';
import ProductCard from "./components/ProductCard";



function App() {
    const [madeRequest, setMadeRequest] = useState(false);
    const [info, setInfo] = useState('nothing');

    let getInfo = () => {
        fetch('/api/hello')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMadeRequest(true);
                setInfo(data['express']);
            });
    };

    return (
        <div>
            <ProductCard
                id={"1234"}
                name={"Blue gilled fire"}
                details={"kills you painfully"}
            />
        </div>
    );
}

export default App;
