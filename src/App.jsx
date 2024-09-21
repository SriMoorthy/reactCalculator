import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  // Validation function
  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setMessage('Please enter both numbers');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setMessage('Please enter valid numbers');
      return false;
    }
    return true;
  };

  // Calculation Function
  const calculate = (operation) => {
    if (!validateInputs()) {
      setResult(null); 
      return;
    }
    
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let res;

    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setMessage('Cannot divide by zero');
          setResult(null);
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
    setMessage('Success!');
  };

  return (
    <div id='main-container'>
      <div id="container">
        <h1>React Calculator</h1>
        <div id="input">
          <input
            type='text'
            placeholder='Num1'
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type='text'
            placeholder='Num2'
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div id="btn">
          <button className='btns' onClick={() => calculate('+')}>+</button>
          <button className='btns' onClick={() => calculate('-')}>-</button>
          <button className='btns' onClick={() => calculate('*')}>*</button>
          <button className='btns' onClick={() => calculate('/')}>/</button>
        </div>
        {message && (
          <div style={{ color: result === null ? 'red' : 'blue', marginTop: '10px',fontSize: '20px' }}>
            {message}
          </div>
        )}
        {result !== null && (
          <div style={{ color: 'green', marginTop: '10px', fontSize:'18px' }}>
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

