import React, { useState } from 'react';
import styled from "styled-components";
import logoMarvel from '../assets/marvel.svg';

// styles Navbar
export const NavbarStyle = styled.header`
grid-column: 1/-1;
background-color: white;
-webkit-box-shadow: 3px 3px 3px 3px rgb(223, 222, 222);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow:    3px 3px 3px 3px rgb(223, 222, 222);  /* Firefox 3.5 - 3.6 */
box-shadow:         3px 3px 3px 3px rgb(223, 222, 222);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.2vh 1vw;
margin: 3px 5px 0px 5px;

.first {
display: flex;
align-items: center;
}

.logo::after {
    color: #E0E0E0;
    content: "|";
    padding-left: 1em;
    font-size: 20px;
}

.search {
margin-left: 1vw;
font-size: 16px;
opacity: 0.4;
}

.search input {
margin-left: 0.8vw;
background-color: white;
outline: none;
border: none;
}

.fav {
margin-right: 2vw;
color: #BDBDBD;
font-size: 18px;
}
`;
// styles Navbar

const Navbar = ({search}) => {
    const [text,setText] = useState('')
    const onSrch = (srch) =>{
        setText(srch)
        search(srch)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <NavbarStyle>
            <div className="first">
                <div className='logo'>
                    <img src={logoMarvel} alt="Marvel" height="30px"/>
                </div>
                <form className="search">
                    <i className="fas fa-search"/>
                    <input
                    type="text"
                    placeholder="Buscar"
                    onChange={(s) => onSrch(s.target.value)}
                    onClick={(event) => { handleSubmit(event)}}
                    value={text}
                    />
                </form>
            </div>
            <a href="/#"><i className="far fa-star fav"></i></a>
        </NavbarStyle>
    );
};
export default Navbar;
