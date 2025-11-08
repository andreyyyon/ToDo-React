import React, { useState } from "react";
import './Todo.css';

function Todo(){

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if(text.trim() !== ""){
            setItems([...items, text]);
            setText("");
        }
    }

    return(
        <div className="container">
            <h1>
                teste
            </h1>
            <form>
                <input onChange={handleChange} value={text} type="text"></input>
                <button onClick={addItem}>Add</button>
            </form>

            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )

};

export default Todo;