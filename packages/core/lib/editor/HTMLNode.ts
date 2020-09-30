import { EditorNodeState } from '../types';

let _document = document;

const HTMLNode = (
	type: string,
	initialState: EditorNodeState | null,
	eventHandlers: [string, EventListener][],
	children: HTMLElement[]
): HTMLElement => {
	let node = _document.createElement(mapTypeToElement(type));
	eventHandlers.forEach(([event, handler]) => {
		node.addEventListener(event, handler);
	});
	children.forEach((child) => {
		node.appendChild(child);
	});
	if (initialState !== null) {
		node.textContent = initialState.value.textContent;
	}
	return node;
};

const mapTypeToElement = (type: string): string => {
	switch (type) {
		case 'root':
			return 'main';
		default:
			return type;
	}
};

export default HTMLNode;
