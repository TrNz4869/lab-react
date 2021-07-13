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
    <input type="text" placeholder="Type your word here!" onChange={getData}/>&nbsp;&nbsp;
    <button className="button" onClick={()=>setPrint(true)}>Enter</button>&nbsp;&nbsp;
    {
       print?
       <WordCard value={data}/>
       :null 
    }
    <button className="button-2" onClick={restartGame}>Restart</button>

    </div>
  );
}

export default App;

