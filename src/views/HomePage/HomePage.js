import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { AppStyle } from './styles';
import { getAllCharacters } from '../../api/characters';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';
import {
	fetchCharactersSuccess,
	fetchCharactersError,
	setActiveCharacter,
} from '../../redux/characters/actions';
import { setDarkTheme, setLightTheme } from '../../redux/theme/actions';

/*const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash; */

function App() {
	const dispatch = useDispatch();
	const { characters, isLoading, activeCharacter } = useSelector(
		(state) => state?.characters
	);
	const { theme } = useSelector((state) => state?.themes);
	const [query, setQuery] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { search } = useLocation();
	const values = queryString.parse(search);

	useEffect(() => {
		getCharacters(values.character);
	}, [getCharacters, values.character]);

	useEffect(() => {
		if (query) {
			getCharacters(query);
		} else {
			getCharacters();
		}
	}, [getCharacters, query]);

	const getCharacters = (c) =>
		getAllCharacters(c)
			.then((characters) => dispatch(fetchCharactersSuccess(characters)))
			.catch(() => dispatch(fetchCharactersError()));

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const onCharacterChange = (character) => {
		dispatch(setActiveCharacter(character));
	};

	const changeTheme = () => {
		if (theme === 'light') {
			dispatch(setDarkTheme());
		} else {
			dispatch(setLightTheme());
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
					elements={characters}
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
