import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  
  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }

  return (
    <div className="App">
    <input type="text" placeholder="Type your word here!" onChange={getData}/>&nbsp;&nbsp;
    <button class="button" onClick={()=>setPrint(true)}>Enter</button>
    {
       print?
       <WordCard value={data}/>
       :null 
    }

    </div>
  );
}

export default App;

