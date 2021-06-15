import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { AppStyle } from './styles';
import { getAllCharacters } from '../../api/characters';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

/*const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash; */

function App() {
	const [elements, setElements] = useState([]);
	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeCharacter, setActiveCharacter] = useState({});
	const [theme, setTheme] = useState('light');
	const { search } = useLocation();
	const values = queryString.parse(search);

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
		setActiveCharacter(element);
	};

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<AppStyle>
			<div className='App'>
				<Navbar
					search={(search) => setQuery(search)}
					theme={theme}
					changeTheme={changeTheme}
				/>
				<Cards
					elements={elements}
					isLoading={isLoading}
					toggleModal={toggleModal}
					onCharacterChange={onCharacterChange}
				/>
				{isModalOpen && (
					<Modal
						activeCharacter={activeCharacter}
						toggleModal={toggleModal}
						theme={theme}
					/>
				)}
			</div>
		</AppStyle>
	);
}

export default App;
