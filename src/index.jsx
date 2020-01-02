import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './components/App';

const theme = {
	primary: 'rgb(92, 107, 192)',
	text: 'rgb(220, 220, 220)',
	background: 'rgb(10, 10, 10)',
	linkBorder: 'rgb(80, 80, 80)'
};

const Root = () => {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
