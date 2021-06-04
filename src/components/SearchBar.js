import React from 'react';
import { Search } from 'react-bootstrap-icons';
import './SearchBar.css';


function SearchBar() {
    return (
        <div className="sbar">
           <form className="form-inline">
                <div className="input-group">
                    <span className="input-group-text border-0 bg-white busqueda" id="search-addon">
                        <Search size={15} color='#E0E0E0' />
                    </span>
                    <input type="search" className="form-control border-0" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon"/>
                </div>
            </form> 
        </div>
    )
}

export default SearchBar
