import React, { useState, useEffect } from 'react';
import './Todo.css';

function Todo(props) {
  const [inputValue, setInputValue] = useState(props.inputValue || '');

  // Load the value from local storage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem(`todoInputValue_${props.id}`);
    const storedDate = localStorage.getItem(`todoInputValue_${props.id}_date`);
    const currentDate = new Date().toLocaleDateString();
    if (storedValue && storedDate === currentDate) {
      setInputValue(storedValue);
    } else {
      setInputValue('');
      localStorage.removeItem(`todoInputValue_${props.id}`);
      localStorage.removeItem(`todoInputValue_${props.id}_date`);
    }
  }, [props.id]);

  // Save the value to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`todoInputValue_${props.id}`, inputValue);
    localStorage.setItem(`todoInputValue_${props.id}_date`, new Date().toLocaleDateString());
  }, [props.id, inputValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    props.onInputChange(props.id, value);
  }

  const handleClearButtonClick = () => {
    setInputValue('');
    props.onClear(props.id);
  }

  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input
          type='input'
          value={inputValue}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <label>{props.timeAt}</label>
      </td>
      <td>
        <button onClick={handleClearButtonClick}>Clear</button>
      </td>
    </tr>
  );
}

export default Todo;
