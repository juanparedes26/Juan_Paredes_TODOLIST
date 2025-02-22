import React from "react";
import '../../styles/index.css';


const Box=()=>{
    return(
        <div className="Target">
        <h1 className="Font">todos</h1>
        
        <div className="Inputs">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="todo-input"
          />
        </div>
      </div>
    );
  }
 export default Box;