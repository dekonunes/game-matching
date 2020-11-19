export const respond = (breakpoint: string, content: string): string => {
	switch (breakpoint) {
		case 'phone':
			return `@media only screen and (max-width: 37.5em) { ${content} };`;
		case 'tab-port':
			return `@media only screen and (max-width: 56.25em) { ${content} };`;
		case 'tab-land':
			return `@media only screen and (max-width: 75em) { ${content} };`;
		case 'big-desktop':
			return `@media only screen and (min-width: 112.5em) { ${content} };`;
		default:
			return '';
	}
};
