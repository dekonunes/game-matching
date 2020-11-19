import { createGlobalStyle } from 'styled-components';
import { respond } from './mixings';

export default createGlobalStyle`

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    *, button, input {
        border: 0;
        background: none;
    }

    html, body, #root {
        font-size: 62.5%;

        ${respond('tab-land', 'font-size: 56.25%')};

        ${respond('tab-port', 'font-size: 49%')};

        ${respond('big-desktop', 'font-size: 75%')};

        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }

    ol,
    ul {
    	list-style: none;
    }

    a,
    a:active {
    	text-decoration: none;
    }
`;
