import './App.css';
import React, { useState, useRef } from "react";
import "./App.css";
import Editor from "./Editor.jsx";
import Preview from './Preview';

import {marked} from "marked";
import {render} from 'react-dom';

const Placeholder = `This is an H1
=============

This is an H2
-------------

###### This is an H6

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 

> 1.   This is the first list item.
> 2.   This is the second list item.
*   Red
*   Green
*   Blue`;

export default function App() {
  //keep state up-high
  const [markdown, setMarkdown] = useState(Placeholder);
  const [showPage, setPage] = useState(false);
  const [textColor, setTextColor] = useState(false);
  const [header, setHeader] = useState(true);

  const changeStyle = () => {
    console.log("you just clicked");
    setTextColor(!textColor);
    setPage(!showPage);
    setHeader(false);
  };

  return (
    <div className="App">
{ header ? (

  <h1 className={`jumbotron jumbotron fluid- ${textColor ? "cont" : "cont2"}`} onClick={changeStyle}> Begin Markdown</h1>
)
  : (<></>)

}

<>
{ showPage ? (
<>
<Editor setMarkdown={setMarkdown} placeholder={Placeholder} />
<Preview markdown={markdown}/> :
</> )
: (
<></>
)}

</>



    </div>
  );
}


// const Preview = ({ markdown }) => {
//   return (
//     <div>
//       <h2 className="previewHeading">Preview</h2>
//       <div
//         className="preview"
//         dangerouslySetInnerHTML={{
//           __html: marked(markdown)
//         }}
//       ></div>
//     </div>
//   );
// };


