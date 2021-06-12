import React from 'react';
import { CardStyle } from './styles';

function Card({ element, toggleModal, onCharacterChange }) {
	const onClick = () => {
		toggleModal();
		onCharacterChange(element);
	};
	return (
		<CardStyle onClick={onClick}>
			<a id='myCard' className='card text-white' href='/#'>
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
					<div className='favorito'>
						<div>
							<i className='far fa-star fav' />
						</div>
					</div>
				</div>
			</a>
		</CardStyle>
	);
}

export default Card;
