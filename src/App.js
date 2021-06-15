import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import store from './redux/store';

const theme = {
	colorsNav: {
		light: '#fff',
		dark: '#212121',
	},
	colorsIcon: {
		light: '##212121',
		dark: '#fff',
	},
	modalBackground: {
		light: '#fff',
		dark: '#212121',
	},
	modalFontColor: {
		light: '#212121',
		dark: '#fff',
	},
};

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
