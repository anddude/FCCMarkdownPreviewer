import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import './App.css';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer! 

## This is a sub-heading. H2

### Another Heading 

Here is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
//this is mult-line code:

function anotherExample(firstLine, lastLine){
if (firstLine == '\`\`\`' && lastline == '\`\`\`'){
  return multilineCode;
  }
}
\`\`\`

**Bold Text**

_Italic Text_

**_Both_**

> This is a Blockquote

\`\`This is inline Code\`\`

- List Item 1
- List Item 2
- List Item 3

[Link Example](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)

![Image Example](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

> Blockquote Example

---

**Table Example:**

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div>
      <h1 name="mdpreviewer" id="mdpreviewer">Markdown Previewer</h1>
      <div className="boxes-container">
        <div name="editor-div" id="editor-div">
          <h2 name="title1" id="title1">Editor</h2>
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
        </div>
        <div name="markdown" id="markdown">
          <h2 name="title2" id="title2">Previewer</h2>
          <div name="preview" id="preview">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
