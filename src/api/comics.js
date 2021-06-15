import axios from 'axios';

export const getComics = async (id) => {
	const data = await axios(
		`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=onsaleDate&ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=648f93f1f5364e8c67820b0de118c9bf&limit=100`
	);
	return data.data.data.results;
};
