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
     {
       print?
       <WordCard value={data}/>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}


export default App;

