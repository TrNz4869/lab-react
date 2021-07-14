import React, {useState} from 'react'; 
import './App.css';
    
const ScrollButton = () =>{ 
    
  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 0){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  }; 
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'auto'
    }); 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <div className="App">
    <button onClick={scrollToBottom}  
     className="button-3" style={{display: visible ? 'inline' : 'none'}}>After Enter, Click here to to see cards</button> 
    </div>
  ); 
} 
    
export default ScrollButton;