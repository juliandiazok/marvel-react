import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';

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
		<ThemeProvider theme={theme}>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
