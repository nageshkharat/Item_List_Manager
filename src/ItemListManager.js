// import React, { useState } from 'react';

// const ItemListManager = () => {
//   // State to hold the list of items
//   const [items, setItems] = useState([]);
//   // State to manage the input field value
//   const [inputValue, setInputValue] = useState('');
//   // State to manage error message if the input is empty
//   const [error, setError] = useState('');

//   // Function to handle input field changes
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     // Clear error when the user starts typing
//     if (e.target.value.trim()) {
//       setError('');
//     }
//   };

//   // Function to handle adding items to the list
//   const handleAddItem = () => {
//     if (inputValue.trim() === '') {
//       // If input is empty, set error message
//       setError('Please enter an item before adding.');
//     } else {
//       // Add item to the list and reset the input field
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div className="item-list-manager">
//       <h1>Item List Manager</h1>
//       <div className="manager">
//         <h1>Item List</h1>
//         </div>
      
//       {/* Input field for adding new items */}
//       <div className="input-section">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter an item"
//           className="input-field"
//         />
        
//       </div>
//       <button onClick={handleAddItem} className="add-button">Add Item</button>

//       {/* Error message */}
//       {error && <p className="error-message">{error}</p>}

//       {/* Displaying the list of items */}
//       <ul className="item-list">
//         {items.map((item, index) => (
//           <li key={index} className="item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemListManager;


import React, { useState } from 'react';

const ItemListManager = () => {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State to manage the input field value
  const [inputValue, setInputValue] = useState('');
  // State to manage error message if the input is empty
  const [error, setError] = useState('');

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Clear error when the user starts typing
    if (e.target.value.trim()) {
      setError('');
    }
  };

  // Function to handle adding items to the list
  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      // If input is empty, set error message
      setError('Please enter an item before adding.');
    } else {
      // Add item to the list and reset the input field
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="item-list-manager">
      {/* Header Section */}
      <header className="header">
        <img src="/hackerRank.png" alt="HackerRank Logo" className="logo" />
        <h1>Item List Manager</h1>
      </header>
        <br/>
        <br/>
        <br/>
      
      {/* Content Section */}
      <div className="content">
        <h2 className='secondItem'>Item List</h2>
        <br/>
        
        {/* Input field for adding new items */}
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter an item"
            className="input-field"
          />
          
        </div>
       
        <button onClick={handleAddItem} className="add-button">Add Item</button>

        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Displaying the list of items */}
        <ul className="item-list">
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
