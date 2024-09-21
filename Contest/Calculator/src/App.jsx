import React, { useState } from 'react';



const App = () => {

const[value1,setValue1] = useState(0);
const[value2,setValue2] = useState(0);
const[result,setResult] = useState(null)
const[message,setMessage] = useState('')

const validInputs = () =>{
  if(value1 === '' || value2 === ''){
    setMessage('Please Enter The Both Numbers');
    return false;
  }
  if(isNaN(value1) || isNaN(value2)){
    setMessage('Please enter the valid numbers');
    return false;
  }
  return true;
}

const calculate = (operation)=>{
  if(!validInputs()){
    setResult('Please Enter The Valid Numbers');
    return;
  }

  let n1 = parseFloat(value1);
  let n2 = parseFloat(value2);
  let res = 0;

  switch(operation){
    case '+':
      res = n1 + n2
      break;
    case '-':
      res = n1 - n2
      break;
    case '*':
      res = n1 * n2
      break;
    case '/':
      if(n2==0){
        setMessage('Cannot divide by zero');
        setResult(null);
        return;
      }
      res = n1 / n2
      break;

    default:
      return;
  }

  setResult(res);
  setMessage("Success");


}

  return (
    <div id='main-container'>
      <div id="container">
        <h1>React Calculator</h1>
        <div id="input">
          <input type='text' placeholder='Num1'  value={value1} onChange={(e)=> setValue1(e.target.value)}/>
          <input type='text' placeholder='Num2'  value={value2}  onChange={(e)=> setValue2(e.target.value)}/>
        </div>
        <div id="btn">
          <button className='btns' onClick={() =>calculate('+')}>+</button>
          <button className='btns' onClick={() =>calculate('-')}>-</button>
          <button className='btns' onClick={() =>calculate('*')}>*</button>
          <button className='btns' onClick={() =>calculate('/')}>/</button>
        </div>
        {message &&(
          <div style={{color : result === 'Please Enter The Valid Numbers' || result === null ? 'red' : 'green', marginTop : '10px'}}>
            {message}
          </div>
        )}
        {result !== 'Please Enter The Valid Numbers' (
          <div style={{ color: 'green', marginTop: '10px' }}>
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
