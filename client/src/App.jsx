import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';
import MenuBar from './components/MenuBar.jsx';
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import _ from 'lodash'
import About from './pages/About';
import ProductListing from './pages/ProductListing';
import SignIn from './components/SignIn';
import ProductPage from "./pages/ProductPage";

function App() {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});

    let getInfo = () => {
        fetch('/api/getInfo')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            });
    };

    useEffect(() => {
        fetch('/user-info')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                console.log(user)
                if (data.user) {
                    console.log(data.userObj);
                    setUser(data.userObj);
                }
            });
    }, []);

    const handleAuthentication = () => {
        if (user) {
            console.log('in loop')
            fetch('/auth/signout')
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    if (data.signOut) {
                        setUser({})
                    }
                });
        }
    };

    return (
        <Router>
            <Switch>
                <Route path={'/about'}>
                    <About />
                </Route>

                <Route path={'/signin'}>
                    <SignIn />
                </Route>

                <Route path={'/cart'}>
                    <p>the cart page will go here</p>
                </Route>

                <Route path={'/products'}>
                    <ProductListing products={products} />
                </Route>

                <Route path={"/product"}>
                    <ProductPage/>
                </Route>

                <Route path={"/"}>
                    <ProductCard
                        id={"1234"}
                        name={"Blue gilled fire"}
                        details={"kills you painfully"}
                    />
                    <div>
                        <h1>{user.username}</h1>
                    </div>
                    <Link to={_.isEmpty(user) && '/signin'}>
                        <span onClick={handleAuthentication}>{_.isEmpty(user) ? 'Sign In' : 'Sign Out'}</span>
                    </Link>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
