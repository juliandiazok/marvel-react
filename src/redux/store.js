import { createStore, combineReducers } from 'redux';
import charactersReducer from './characters/reducer';
import themesReducer from './theme/reducer';

const reducer = combineReducers({
	characters: charactersReducer,
	themes: themesReducer,
});

const store = createStore(reducer);
store.subscribe(() => {
	console.log(store.getState());
});

export default store;
