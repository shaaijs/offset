import { isBackspace, isCharacterKey, isNewLine } from '../util/keyChecker';
import { getUnique } from '../util/uniqueId';
import {
	EditorNode as EditorNodeInterface,
	EditorNodeMeta,
	EditorNodeState,
	EditorNodeStateValue,
} from './../types';
import HTMLNode from './HTMLNode';

class EditorNode implements EditorNodeInterface {
	id = '';
	type = '';
	node: HTMLElement | null = null;
	children: EditorNode[] = [];
	meta = {};
	state: { value: EditorNodeStateValue; active: boolean } = {
		value: { textContent: '' },
		active: false,
	};

	constructor(
		id: string,
		type: string,
		children: EditorNode[],
		initialState: EditorNodeState,
		meta: EditorNodeMeta
	) {
		this.id = id || getUnique();
		this.type = type;
		this.children = children || [];
		this.meta = meta || {};
		this.state = initialState;

		let handlers: [string, EventListener][] = initialState.active
			? []
			: [['click', this.handleClick]];
		this.node = HTMLNode(
			type,
			initialState,
			handlers,
			children.map((c) => c.node)
		);
		if (initialState.active) this.node.focus();
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	set value(val) {
		this.state.value = val;
		this.node.textContent = val.textContent;
	}

	get value() {
		return this.state.value;
	}

	set active(val) {
		this.state.active = val;
		let activeHandlers: [string, EventListener][] = [
			['keydown', this.handleKeyDown],
		];
		let inactiveHandlers: [string, EventListener][] = [
			['click', this.handleClick],
		];
		if (val) {
			activeHandlers.forEach(([type, handler]) => {
				this.node.addEventListener(type, handler);
			});
			inactiveHandlers.forEach(([type, handler]) => {
				this.node.removeEventListener(type, handler);
			});
		} else {
			activeHandlers.forEach(([type, handler]) => {
				this.node.removeEventListener(type, handler);
			});
			inactiveHandlers.forEach(([type, handler]) => {
				this.node.addEventListener(type, handler);
			});
		}
	}

	get active() {
		return this.state.active;
	}

	handleClick(e: MouseEvent) {
		this.active = true;
	}

	handleKeyDown(e: KeyboardEvent) {
		let key = e.key;
		// Re-write to a switch case
		if (isCharacterKey(key)) {
			this.state.value.textContent += key;
		} else if (isBackspace(key)) {
			this.state.value.textContent = this.state.value.textContent.slice(
				0,
				-1
			);
		} else if (isNewLine(key)) {
			// Emit an event to parent to create a new node and set it to active
		}
	}
}

export default EditorNode;
