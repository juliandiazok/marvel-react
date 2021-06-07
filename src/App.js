import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Cards from './components/Cards';
import Navbar from './components/Navbar';


const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash;

// styles App
export const AppStyle = styled.header`
background-color: rgba(206, 205, 205, 0.589);
background-size: 100%;
`;
// styles App

function App() {
  const[elements,setElements] = useState([])
  const[query,setQuery] = useState('')

    useEffect(()=>{
      const fetch = async()=>{
        if (query===''){
          const json = await axios(URL)
          console.log(json.data.data.results)
          setElements(json.data.data.results)
        }
        else {
          const json = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=648f93f1f5364e8c67820b0de118c9bf`)
          console.log(json.data.data.results)
          setElements(json.data.data.results)
        }
      }

      fetch()
    },[query])
  

  return (
    <AppStyle>
      <div className="App">
        <Navbar search={(srch)=>setQuery(srch)} />
        <Cards elements={elements} />
      </div>
    </AppStyle>
  )
}

export default App
