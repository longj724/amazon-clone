import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [madeRequest, getMadeRequest] = useState(false)
  const [info, setInfo] = useState('nothing')

  let getInfo = () => {
    fetch('/api/hello').then((res) => {
      return res.json();
    }).then((data) => {
      getMadeRequest(true)
      setInfo(data["express"])
    })
  }

  return (
    <div>
      <button onClick={getInfo}>Make a get request</button>
      { madeRequest ? <p>Made request</p> : <p>Didn't make request</p>}
    <p>{info}</p>
    </div>
  );
}

export default App;
