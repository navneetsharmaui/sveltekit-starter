export const convertToSentence = (value: string): string =>
	`${value.charAt(0).toUpperCase()}${value.substr(1).toLocaleLowerCase().replace(/-/g, ' ')}`;
