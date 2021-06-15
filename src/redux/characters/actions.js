export const fetchCharactersSuccess = (payload) => ({
	type: 'FETCH_CHARACTERS_SUCCESS',
	payload,
});

export const fetchCharactersError = () => ({
	type: 'FETCH_CHARACTERS_ERROR',
});

export const setActiveCharacter = (payload) => ({
	type: 'SET_ACTIVE_CHARACTER',
	payload,
});
