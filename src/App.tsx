import React from 'react';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// eslint-disable-next-line require-jsdoc
const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx dsdsdsd</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	</ThemeProvider>
);

export default App;
