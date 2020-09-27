export interface EditorNode {
    id: string;
    type: string;
    children: EditorNode[];
    meta: EditorNodeMeta;
    state: EditorNodeState;
}

export interface EditorNodeMeta { }
export interface EditorNodeState {
    value: EditorNodeStateValue;
}
export interface EditorNodeStateValue {
    textContent: string;
}
