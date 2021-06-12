import axios from 'axios';

export const getAllCharacters = async (query = '') => {
	const randomNumber = Math.round(Math.random() * 1443);
	const data = await axios(
		`https://gateway.marvel.com/v1/public/characters?${
			query ? `nameStartsWith=${query}&` : `offset=${randomNumber}&`
		}ts=1&apikey=8f83230b46183b4e034c4dddfde45a8e&hash=648f93f1f5364e8c67820b0de118c9bf&limit=50`
	);
	return data?.data?.data.results;
};
