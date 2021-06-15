import { filteredFavorites } from './utils/characters';

test('Should filter characters that match with the query', () => {
	const array = [
		{ description: 'un kpo', id: 1011212, name: 'gustavo' },
		{ description: 'german', id: 1214245, name: 'monzon' },
	];
	const query = 'gus';
	const filtered = filteredFavorites(query, array);
	expect(filtered.length).toBe(1);
	expect(filtered[0].name).toBe('gustavo');
});

test('Should return a empty array if there is no match', () => {
	const array = [
		{ description: 'un kpo', id: 1011212, name: 'gustavo' },
		{ description: 'german', id: 1214245, name: 'monzon' },
	];
	const query = 'julian';
	const filtered = filteredFavorites(query, array);
	expect(filtered.length).toBe(0);
});
