import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const LocalStorageExample = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [storedData, setStoredData] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSaveData = () => {
//     if (inputValue.trim() !== '') {
//       // Save data to local storage
//       const updatedData = [...storedData, inputValue];
//       setStoredData(updatedData);
//       localStorage.setItem('userData', JSON.stringify(updatedData));

//       // Clear input field
//       setInputValue('');
//     }
//   };

//   const handleDeleteData = (index) => {
//     // Delete data from local storage
//     const updatedData = storedData.filter((_, i) => i !== index);
//     setStoredData(updatedData);
//     localStorage.setItem('userData', JSON.stringify(updatedData));
//   };
//   const css = {
//     color: 'black',
//     backgroundColor: 'lightgray',
//     padding: '10px 9px',
//     border: '1px solid darkgray',
//     borderRadius: '5px',
//     margin:'5px'
//   }
//   return (
//     <div style={css}>
//       <h1>Local Storage Example</h1>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleSaveData}>Save</button>

//       <ul>
//         {storedData.map((data, index) => (
//           <li key={index}>
//             <div style={css}>{data}
//             <button onClick={() => handleDeleteData(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <LocalStorageExample/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
