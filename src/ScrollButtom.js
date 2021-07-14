import React, {useState} from 'react'; 
import './App.css';
    
const ScrollButtom = () =>{ 
    
  const [visible] = useState(true) 
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'auto'
    }); 
  }; 
    
  return ( 
    <button onClick={scrollToBottom}  
     className="button-3" style={{display: visible ? 'inline' : 'none'}}>After Enter, Click here to to see cards</button> 
  ); 
} 
    
export default ScrollButtom;