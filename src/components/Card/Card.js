import React, { useState, useEffect } from 'react';
import { CardStyle } from './styles';

function Card({ element, toggleModal, onCharacterChange }) {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		let favorites = localStorage.getItem('favorites');
		if (favorites) {
			favorites = JSON.parse(favorites);
			const exists = favorites.find((char) => char.id === element.id);
			if (exists) {
				setIsFavorite(true);
			}
		}
	}, [element.id]);

	const onClick = () => {
		toggleModal();
		onCharacterChange(element);
	};

	const onFavoriteClick = (event) => {
		event.stopPropagation();
		let favoriteCharacters = localStorage.getItem('favorites');
		if (!favoriteCharacters) {
			setIsFavorite(true);
			return localStorage.setItem('favorites', JSON.stringify([element]));
		}
		favoriteCharacters = JSON.parse(favoriteCharacters);
		const exist = favoriteCharacters.find((char) => char.id === element.id);
		if (!exist) {
			favoriteCharacters.push(element);
			setIsFavorite(true);
			return localStorage.setItem(
				'favorites',
				JSON.stringify(favoriteCharacters)
			);
		}
		setIsFavorite(false);
		const hola = favoriteCharacters.filter((char) => char.id !== element.id);
		localStorage.setItem('favorites', JSON.stringify(hola));
	};

	return (
		<CardStyle onClick={onClick}>
			<span id='myCard' className='card text-white'>
				<img
					src={
						element.thumbnail.path +
						'/portrait_uncanny.' +
						element.thumbnail.extension
					}
					className='card-img'
					alt={element.name}></img>
				<div className='card-img-overlay d-flex flex-column'>
					<h6 className='mt-auto name'>
						<strong>{element.name}</strong>
					</h6>
				</div>
				<div className='card-img-overlay'>
					<div className='favorito' onClick={onFavoriteClick}>
						<i className={`${isFavorite ? 'fas' : 'far'} fa-star fav`} />
					</div>
				</div>
			</span>
		</CardStyle>
	);
}

export default Card;
