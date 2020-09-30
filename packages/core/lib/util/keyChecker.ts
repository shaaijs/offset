export const isCharacterKey = (key: string) => {
	return key.length === 1 && /\w|\d|\s/.test(key);
};

export const isBackspace = (key: string) => {
	return 'Backspace' === key;
};

export const isNewLine = (key: string) => {
	return 'Enter' === key;
};
