import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import { getAllCharacters } from '../api/characters';
import Cards from '../components/Cards/Cards';
import Navbar from '../components/Navbar/Navbar';
import Modal from '../components/Modal/Modal';

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
	const [elements, setElements] = useState([]);
	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeCharacter, setActiveCharacter] = useState({});
	const { search } = useLocation();
	const values = queryString.parse(search);

	console.log(values);

	useEffect(() => {
		getCharacters(values.character);
	}, [values.character]);

	useEffect(() => {
		if (query) {
			getCharacters(query);
		} else {
			getCharacters();
		}
	}, [query]);

	const getCharacters = (c) =>
		getAllCharacters(c)
			.then((characters) => {
				setElements(characters);
			})
			.finally(() => {
				setLoading(false);
			});

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const onCharacterChange = (element) => {
		console.log(element);
		setActiveCharacter(element);
	};

	return (
		<AppStyle>
			<div className='App'>
				<Navbar search={(search) => setQuery(search)} />
				<Cards
					elements={elements}
					isLoading={isLoading}
					toggleModal={toggleModal}
					onCharacterChange={onCharacterChange}
				/>
				{isModalOpen && (
					<Modal activeCharacter={activeCharacter} toggleModal={toggleModal} />
				)}
			</div>
		</AppStyle>
	);
}

export default App;
