import axios from 'axios';

export const getComics = async (id) => {
	const data = await axios(
		`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=onsaleDate&apikey=c70bee055661b1eabc28f40a0fea1796&limit=100`
	);
	return data.data.data.results;
};
