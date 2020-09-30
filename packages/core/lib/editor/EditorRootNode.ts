import { getUnique } from '../util/uniqueId';
import EditorNode from './EditorNode';
import HTMLNode from './HTMLNode';
import {
	EditorRootNode as EditorRootNodeInterface,
	EditorNodeState,
} from './../types';

const initialState: EditorNodeState = {
	active: true,
	value: {
		textContent: 'Hello',
	},
};

class EditorRootNode implements EditorRootNodeInterface {
	id: string;
	node: HTMLElement;
	children: EditorNode[];
	constructor(id: string) {
		let firstChild = new EditorNode(getUnique(), 'p', [], initialState, {});
		this.id = id;
		this.node = HTMLNode('root', null, [], [firstChild.node]);
		this.node.contentEditable = 'true';
		this.node.style.height = '200px';
		this.node.style.border = '1px solid #ccc';
		this.node.focus();
		this.children = [firstChild];
	}
}

export default EditorRootNode;
