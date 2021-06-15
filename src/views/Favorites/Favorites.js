import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavoritesStyle } from './styles';
import { filteredFavorites } from '../../utils/characters';
import {
	fetchCharactersSuccess,
	setActiveCharacter,
} from '../../redux/characters/actions';
import { setDarkTheme, setLightTheme } from '../../redux/theme/actions';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

/*const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash; */

function Favorites() {
	const dispatch = useDispatch();
	const { characters, isLoading, activeCharacter } = useSelector(
		(state) => state?.characters
	);
	const { theme } = useSelector((state) => state?.themes);
	const [query, setQuery] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		var arrayOfFavorites = JSON.parse(localStorage.getItem('favorites') || '0');
		if (query) {
			const filtered = filteredFavorites(query, arrayOfFavorites);
			dispatch(fetchCharactersSuccess(filtered));
		} else {
			dispatch(fetchCharactersSuccess(arrayOfFavorites));
		}
	}, [dispatch, query]);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const onCharacterChange = (characters) => {
		dispatch(setActiveCharacter(characters));
	};

	const changeTheme = () => {
		if (theme === 'light') {
			dispatch(setDarkTheme());
		} else {
			dispatch(setLightTheme());
		}
	};

	return (
		<FavoritesStyle>
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
		</FavoritesStyle>
	);
}

export default Favorites;
