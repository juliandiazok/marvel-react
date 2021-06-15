import React, { useState, useEffect } from 'react';
import { FavoritesStyle } from './styles';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

/*const hash = "648f93f1f5364e8c67820b0de118c9bf"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=" + hash; */

function Favorites() {
	const [elements, setElements] = useState([]);
	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [theme, setTheme] = useState('light');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeCharacter, setActiveCharacter] = useState({});

	useEffect(() => {
		var arrayOfFavorites = JSON.parse(localStorage.getItem('favorites') || '0');
		if (query) {
			var filtered = arrayOfFavorites.filter((f) =>
				f.name.toUpperCase().startsWith(query.toUpperCase())
			);
			setElements(filtered);
			setLoading(false);
		} else {
			setElements(arrayOfFavorites);
			setLoading(false);
		}
	}, [query]);

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
		<FavoritesStyle>
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
		</FavoritesStyle>
	);
}

export default Favorites;
