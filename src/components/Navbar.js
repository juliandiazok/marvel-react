import React from 'react';
import './Navbar.css';
import { Star } from 'react-bootstrap-icons';
import SearchBar from './SearchBar';
import logoMarvel from '../assets/marvel.svg';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-white">
                <div className="container-fluid">
                    <div className="barra">
                        <div className="firstPart">
                            <a className='logo' href="https://www.marvel.com/">
                                <img src={logoMarvel} alt="Marvel" height="25px" />
                            </a>
                        </div>
                        <SearchBar />
                    </div>
                    <div className="fav">
                        <Star size={22} color='#BDBDBD' src="/#" />
                    </div>
                </div>
            </nav>       
        </div>
    )
}

export default Navbar
