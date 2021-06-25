import axios from 'axios';
import { URL, key } from './constants';

export const getAllCharacters = async (query = '') => {
	const randomNumber = Math.round(Math.random() * 1443);
	const data = await axios(
		`${URL}?${
			query ? `nameStartsWith=${query}&` : `offset=${randomNumber}&`
		}${key}&limit=50`
	);
	return data?.data?.data.results;
};
