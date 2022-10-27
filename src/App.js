import "./App.css";
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [listItems, setListItems] = useState([]);
  const inputField = document.querySelector("#input");
  const List = ({ higlight, value }) => {
    return <li>{getHighlightedText(value, higlight)}</li>;
  };

  //function to add item in listItems array
  const addItem = (e) => {
    if (e.key === "Enter") {
      if (textInput == "") {
        alert("please type something");
      } else {
        const newItem = {
          id: Math.random(),
          text: textInput,
        };
        setListItems([...listItems, newItem]);
        inputField.value = "";
        setTextInput("");
      }
    }
  };

  //Clear all items in listItems array
  const handleClearBtn = () => {
    setListItems([]);
  };

  //making the matching textInput bold by split to parts
  function getHighlightedText(text, higlight) {
    var parts = text.split(new RegExp(`(${higlight})`));

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? <b>{part}</b> : part}
      </React.Fragment>
    ));
  }

  return (
    <>
      <div className="container">
        <div className="listBox">
          <input
            id="input"
            type="text"
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter word"
            onKeyDown={addItem}
          />

          <ul id="ulText">
            {" "}
            {listItems.map((v) => (
              <List key={v.id} value={v.text} higlight={textInput} />
            ))}
          </ul>
          <button onClick={handleClearBtn}>Clear list</button>
        </div>
      </div>
    </>
  );
}

export default App;
