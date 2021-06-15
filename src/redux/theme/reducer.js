const initialState = {
	theme: 'light',
};

const themesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_THEME_DARK':
			return {
				...state,
				theme: 'dark',
			};
		case 'SET_THEME_LIGHT':
			return {
				...state,
				theme: 'light',
			};
		default:
			return state;
	}
};

export default themesReducer;
