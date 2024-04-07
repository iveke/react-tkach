import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import CompRef from "CompRef";
// import { GlobalStyle } from 'GlobalStyle.jsx';
export const rootModal = document.querySelector("#modals");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CompRef />
    <App />
  </>
);


// const p = document.getElementById('p');
// const result = document.getElementById('result');

//   let range = new Range();
//   range.setStart(p, 0);
//   range.setEnd(p, 1);

//   const content = range.extractContents();
//   result.innerHTML = '';
//   result.append("i Get This: ", content);
//   console.log(range);

// const paragraph = document.getElementById("selectable");

// paragraph.addEventListener("mousedown", function (event) {
//   event.preventDefault(); // Prevent default text selection behavior

// const {x, y} = event;

// console.log(x, y)
//   // Get the clicked letter
//   const letter = getLetterUnderCursor(x, y);

// // const range = document.caretRangeFromPoint(x, y);
// // console.log(range);
// // const content = range.extractContents()
// // result.append(content);

//   // Check if a letter is selected
// //   if (letter) {
// //     selectText(letter); // Select the letter
// //   }
// });

// function getLetterUnderCursor(x, y) {
//   const range = document.caretRangeFromPoint(x, y); // Get the caret range at the specified point
//   const node = range.startContainer;
//   console.log(node);// Get the node containing the letter

//   if (node.nodeType === Node.TEXT_NODE) {
//     const text = node.textContent.trim();
//     console.log(range);
//     console.log(text)
//     const offset = range.startOffset;
//     console.log(offset);
//     console.log(text.charAt(offset))
//     return text.charAt(offset); // Return the letter at the caret position
//   }

//   return null; // No letter found
// }

// function selectText(letter) {
//   const selection = window.getSelection();
//   console.log(selection) // Get the selection object
//   const range = document.createRange(); // Create a range object
//   range.selectNode(letter); // Select the letter
//   selection.removeAllRanges(); // Remove existing selections
//   selection.addRange(range); // Add the range to the selection
// }
