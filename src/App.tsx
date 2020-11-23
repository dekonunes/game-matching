import React from 'react';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import AccountDropdown from './components/AccountDropdown';

// eslint-disable-next-line require-jsdoc
const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<div className="App">
			<header className="App-header">
				<AccountDropdown />
			</header>
		</div>
	</ThemeProvider>
);

export default App;
