import React from 'react';
import ironImage from '../../assets/iron.png';
import { LoadingStyle } from './styles';

export const Loading = () => {
	return (
		<LoadingStyle>
			<div className='loading-ironman'>
				<img className='ironImage' src={ironImage} alt='Iron Man Loading' />
			</div>
			<h2>Soy inevitable</h2>
			<h3>(Los elementos se están cargando...)</h3>
		</LoadingStyle>
	);
};

export default Loading;
