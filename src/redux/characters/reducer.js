const initialState = {
	characters: [],
	isLoading: true,
	activeCharacter: {},
};

const charactersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_CHARACTERS_SUCCESS':
			return {
				...state,
				characters: payload,
				isLoading: false,
			};
		case 'FETCH_CHARACTERS_ERROR':
			return {
				...state,
				isLoading: false,
			};
		case 'SET_ACTIVE_CHARACTER':
			console.log(payload);
			return {
				...state,
				activeCharacter: payload,
			};
		default:
			return state;
	}
};

export default charactersReducer;
