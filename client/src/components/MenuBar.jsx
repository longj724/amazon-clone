import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import '../css/menubar.css';
import { Link } from 'react-router-dom';

function MenuBar() {
    return (
        <div className="menubar">
            <Link to="/">
                <img
                    className="menubar__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="menubar__search">
                <input className="menubar__searchInput" type="text" />
                <SearchIcon className="menubar__searchIcon" />
            </div>

            <div className="menubar__nav">
                <div className="menubar__option">
                    <span className="menubar__optionLineOne">Hello Guest</span>
                    <span className="menubar__optionLineTwo">Sign In</span>
                </div>

                <div className="menubar__option">
                    <span className="menubar__optionLineOne">Returns</span>
                    <span className="menubar__optionLineTwo">Orders</span>
                </div>

                <div className="menubar__option">
                    <span className="menubar__optionLineOne">Your</span>
                    <span className="menubar__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="menubar__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="menubar__optionLineOne menubar__basketCount">
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MenuBar;
