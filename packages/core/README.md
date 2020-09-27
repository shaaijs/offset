# offset\_ | core

**Currently a WIP**. Core would include the data model and event logic for the Offset editor. This can then be used to build an editor UI in any framework.

## Overview

Offset would follow a data to UI mapping model instead of `contenteditable`. The question though would be how much logic would `core` take care of. Given that the present UI framework like React and Vue have fantastic models for reactivity, Offset should leverage those instead of re-inventing the wheel.

So essentially, `core` would do these three important things:

##### 1. Maintain a data model

The content present on the editor would be maintained as a data tree by `core`. This data tree would also contain metadata and grouping according to the current state of the editor. Naturally it should be easy to convert this tree to a UI tree for example in the case of React.

##### 2. Handling user events

Core would handle events delegated by the UI implementation and map them to appropriate actions. The incoming events would be singular, but at times they should be able to share state internally. E.g., in the case of selection and then making the test italic, `core` must maintain the selection are and check on the next events.

##### 3. Modifying the data model and emitting changes

According to the events, `core` should be able to efficiently modify the data representation and send it back to the UI implementation. Each change would result in a new tree and the UI would take care of rendering optimizations. A VanillaJS UI implementation can use a virtual DOM for this purpose, but again that isn't what `core` should care about.
