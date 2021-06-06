import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

const md5 = require('md5');
const BaseURL = "https://gateway.marvel.com/v1/public/";
const APIKeyPrivate = "fcf7cdeab1669a4a53d714db335925ef2e68c24d";
const APIKeyPublic = "8f83230b46183b4e034c4dddfde45a8e";
const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
const URL = BaseURL + "characters?ts=1&apikey=" + APIKeyPublic + "&hash=" + Hash;

// styles App
export const AppStyle = styled.header`
background-color: rgba(206, 205, 205, 0.589);
background-size: 100%
`;
// styles App

function App() {
  const[elements,setElements] = useState([])

    useEffect(()=>{
        const fetch = async()=>{
              const json = await axios(URL)
              console.log(json.data.data.results)
              setElements(json.data.data.results)
      }

      fetch()
    },[])
  

  return (
    <AppStyle>
      <div className="App">
        <Navbar />
        <Cards elements={elements} />
      </div>
    </AppStyle>
  )
}

export default App
