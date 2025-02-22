import React, { useState } from "react";
import "../../styles/index.css";

const Box = () => {

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== "") {

      setItems([...items, inputValue]);
      setInputValue("");
    }
  };


  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="Target">

      <h1 className="Font">todos</h1>
      
      <div className="Inputs">
  
        <input
          type="text"
          placeholder="What needs to be done?"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
        />
        
 
        {items.length === 0 ? (
          <p className="no-tasks">No hay tareas, añada una</p>
        ) : (
          <ul className="todo-list">
            {items.map((task, index) => (
              <li key={index} className="todo-item">
                {task}
           
                <span
                  className="delete"
                  onClick={() => deleteItem(index)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Box;
