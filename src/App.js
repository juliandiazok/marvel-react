import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import { BrowserRouter as Router } from 'react-router-dom';


/*const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash; */

// styles App
export const AppStyle = styled.header`
background-color: rgba(206, 205, 205, 0.589);
background-size: 100%;
min-height: 100vh;
`;
// styles App

function App() {
  const[elements,setElements] = useState([])
  const[query,setQuery] = useState('')
  const[isLoading,setLoading] = useState(true)
  const[isModalOpen,setIsModalOpen] = useState(false)
  const[activeCharacter,setActiveCharacter] = useState({})

    useEffect(()=>{
      const fetch = async()=>{
        if (query===''){
          const randomNumber = Math.round(Math.random() * 1443)
          const json = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=648f93f1f5364e8c67820b0de118c9bf&limit=50&offset=${randomNumber}`)
          console.log(json.data.data.results)
          setElements(json.data.data.results)
          setLoading(false)
        }
        else {
          const json = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=648f93f1f5364e8c67820b0de118c9bf&limit=50`)
          console.log(json.data.data.results)
          setElements(json.data.data.results)
          setLoading(false)
        }
      }

      fetch()
    },[query])
    
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen)
    }

    const onCharacterChange = (element) => {
      console.log(element)
      setActiveCharacter(element)
    }

  return (
    <Router>
      <AppStyle>
        <div className="App">
          <Navbar search={(search)=>setQuery(search)}/>
          <Cards elements={elements} isLoading={isLoading} toggleModal={toggleModal} onCharacterChange={onCharacterChange}/>
          {isModalOpen && <Modal activeCharacter={activeCharacter} toggleModal={toggleModal}/>}
        </div>
      </AppStyle>
    </Router>
  )
}

export default App
