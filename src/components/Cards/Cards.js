import React from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { CardsStyle } from './styles';

const Cards = ({
	elements = [],
	isLoading,
	toggleModal,
	onCharacterChange,
}) => {
	return isLoading ? (
		<Loading />
	) : !elements.length ? (
		<CardsStyle>
			<h2 className='nofav'>No hay elementos favoritos... Todavía</h2>
			{console.log(elements)}
		</CardsStyle>
	) : (
		<CardsStyle>
			<section className='containerHero'>
				{elements.map((element) => (
					<Card
						key={element.id}
						element={element}
						toggleModal={toggleModal}
						onCharacterChange={onCharacterChange}
					/>
				))}
			</section>
		</CardsStyle>
	);
};

export default Cards;
