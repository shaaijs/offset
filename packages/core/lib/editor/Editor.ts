import { getUnique } from '../util/uniqueId';
import {
	Editor as EditorInterface,
	EditorConfig,
	EditorMeta,
	EditorNodeState,
	EditorRootNode as EditorRootNodeInterface,
} from './../types';
import EditorRootNode from './EditorRootNode';

/*
    Editor tree class
*/

class Editor implements EditorInterface {
	id: string;
	meta: EditorMeta;
	root: EditorRootNodeInterface;

	constructor(config: EditorConfig) {
		this.root = new EditorRootNode(getUnique());
		this.meta = {};
	}
}

export default Editor;
