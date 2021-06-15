import React from 'react';
import { ComicLoadingStyle } from './styles';

export const Loading = () => {
	return (
		<ComicLoadingStyle>
			<h4>(Los comics se están cargando...)</h4>
		</ComicLoadingStyle>
	);
};

export default Loading;
