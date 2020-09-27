![](offset.png)

<span style="display: block; text-align: center">The open source WYSIWYG editor you always wanted</span>

---

This project aims to create an open-source, highly customisable _yet_ a simple to use WYSIWYG editor for the web. It originates from the scarcity of easy-to-use and light-weight text editors on the internet.

## Vision

To build a good solution to the existing problems related to text editors, there needs to be a clear-cut list of points to tick off.

##### 1. Easy to Integrate

Offset should be very easy to integrate. High customisation should not mean a difficult experience for someone who just wants a minimal text editor.

##### 2. Lightweight

Parts of the editor should be easily removable if not required and hence keep the bundle size low. A few solutions out there require you to include large bundles of the editor - something where Offset should be contrasting.

##### 3. Extensible

There should be a good plugin system so that anyone can build a piece and integrate it into the main package.

##### 4. Highly Customisable

There are majorly two types of editor experiences - inline and block. Offset should be able to adapt easily to any, meaning that the core logic should be separate from UI.

## Tech Decisions

To achieve the extensibility and customisation as mentioned above for Offset, most of the visual elements would have to be represented in data. Some form of configuration or schema system would ensure translation of intended structure to actual editor.

##### What is a WYSIWYG editor?

Just taking a step back and understanding what an editor is makes it clear to define feature sets.

> WYSIWYG is simply What You See Is What You Get. Whatever you write in the editor and however you format it would exactly reflect when the content goes out on a webpage.

So there are two things to consider - content and formatting. A lot of editors give you a direct HTML conversion of the content, but at times you might also require a JSON representation so that you can use the data somewhere else - for listing the post titles maybe.

Hence, Offset should be able to normally generate an HTML representation and also should be able to give an equivalent data representation.

##### Keeping Content & Formating separate

To note, this is about the content inside the editor - the one user types.

## Division of Concerns

To build upon separation of logic and UI, it would be best to build Offset as a collection of packages - some around the logic of transforming config files into relevant data representation and others around converting it to actual rendering elements.
