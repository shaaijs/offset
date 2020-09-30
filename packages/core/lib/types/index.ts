export interface EditorNode {
	id: string;
	type: string;
	node: HTMLElement | null;
	children: EditorNode[];
	meta: EditorNodeMeta;
	state: EditorNodeState;
}

export interface EditorNodeMeta {}

export interface EditorNodeState {
	value: EditorNodeStateValue;
	active: boolean;
}

export interface EditorNodeStateValue {
	textContent: string;
}

export interface EditorMeta {}

export interface EditorRootNode {
	id: string;
	node: HTMLElement;
	children: EditorNode[];
}

export interface Editor {
	id: string;
	meta: EditorMeta;
	root: EditorRootNode;
}

export interface EditorConfig {}
