import React, { useState } from 'react';
import './App.css';
import ItemX from './components/ItemX';
import ParticlesBg from 'particles-bg'

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        if(input!==""){
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }
}

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
      <div className="to-do-list">
          <div className="heading">
              <h1 className="title">To-do</h1>
          </div>
              <input
                  type="text"
                  value={input}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Add</button>

          <div className="items">
            <ul>
                {items.map((item, index) => (
                    <ItemX
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                    />
                ))}
            </ul>
          </div>
          <ParticlesBg type="fountain" bg={true} color="#494a4b"/>

      </div>
      
    );
}

export default App;