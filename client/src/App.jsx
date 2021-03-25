import React, { useState, useEffect } from 'react';
import Home from './components/Home.jsx';
import MenuBar from './components/MenuBar.jsx';
import About from './pages/About';
import ProductListing from './pages/ProductListing';
import SignIn from './components/SignIn';
import ProductPage from './pages/ProductPage';
import ProductCard from './components/ProductCard';
import Checkout from './components/Checkout';
import './css/App.css';

import _ from 'lodash';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
                console.log(data);
                console.log(user);
                if (data.user) {
                    console.log(data.userObj);
                    setUser(data.userObj);
                }
            });
    }, []);

    const handleAuthentication = () => {
        if (user) {
            console.log('in loop');
            fetch('/auth/signout')
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    if (data.signOut) {
                        setUser({});
                    }
                });
        }
    };

    return (
        <Router>
            <MenuBar />
            <Switch>
                <Route path={'/about'}>
                    <About />
                </Route>

                <Route path={'/signin'}>
                    <SignIn />
                </Route>

                <Route path={'/checkout'}>
                    <Checkout />
                </Route>

                <Route path={'/products'}>
                    <ProductListing products={products} />
                </Route>

                <Route path={'/product'}>
                    <ProductPage />
                </Route>

                <Route path={'/'}>
                    <Home />
                    <ProductCard
                        id={'1234'}
                        name={'Blue gilled fire'}
                        details={'kills you painfully'}
                    />
                    <div>
                        <h1>{user.username}</h1>
                    </div>
                    {/* <Link to={_.isEmpty(user) && '/signin'}>
                        <span onClick={handleAuthentication}>
                            {_.isEmpty(user) ? 'Sign In' : 'Sign Out'}
                        </span>
                    </Link> */}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
