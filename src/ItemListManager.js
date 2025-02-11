import React, { useState } from 'react';

const ItemListManager = () => {

  const [items, setItems] = useState([]);  

  const [inputValue, setInputValue] = useState('');  

  const [error, setError] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.trim()) {
      setError('');
    }
  };


  const handleAddItem = () => {
    if (inputValue.trim() === '') {
 
      setError('Please enter an item before adding.');
    } else {
  
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="itemListManager">
      <header className="header">
        <img src="/hackerRank.png" alt="HackerRank Logo" className="logo" />
        <h1>Item List Manager</h1>
      </header>
        <br/>
        <br/>
        <br/>
      
      <div className="content">
        <h2 className='secondItem'>Item List</h2>
        <br/>
        
        <div className="inputSection">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter item"
            className="inputField"
          />
          
        </div>
       
        <button onClick={handleAddItem} className="addButton">Add Item</button>

        {error && <p className="errorMessage">{error}</p>}

        <ul className="itemList">
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemListManager;
