import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  const restartGame = ()=>{
    window.location.reload();
  }
  
  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }

  return (
    <div className="App">
    <div className="frame">
    <h3>Welcome to Word Card Game</h3>
    <b>Instruction</b><br></br>
    <p>1. Type your word on typebox and press Enter button</p>
    <p>2. Choose cards to make the correct word</p>
    <input type="text" placeholder="Type your word here!" onChange={getData}/>&nbsp;&nbsp;
    <button className="button" onClick={()=>setPrint(true)}>Enter</button>&nbsp;&nbsp;
    </div>  
    <div className="frame-2">
    {
       print?
       <WordCard value={data}/>
       :null 
    }
    </div>
    <button className="button-2" onClick={restartGame}>Restart</button>

    </div>
  );
}

export default App;

