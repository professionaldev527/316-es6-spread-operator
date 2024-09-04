import React, { useState } from "react";

function App() {
  // const [text, setText] = useState("");

  const [items, setItems] = useState(["A Item"]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  function addItem() {
    setItems([...items, inputValue]); // Add the input value to the items array
    setInputValue(''); // Clear the input field after adding
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleChange}
       value={inputValue}
        type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
