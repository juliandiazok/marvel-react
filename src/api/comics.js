import axios from 'axios';
import { URL, key } from './constants';

export const getComics = async (id) => {
	const data = await axios(
		`${URL}/${id}/comics?orderBy=onsaleDate&${key}&limit=100`
	);
	return data?.data?.data.results;
};
