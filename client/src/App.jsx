import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar.jsx';
import './productCard.jsx';

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
			<MenuBar />
			
        </div>
    );
}

export default App;
