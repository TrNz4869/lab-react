import React, {useState} from 'react';
import './App.css';
  
const ScrollTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button onClick={scrollToTop}  
     className="button-3" style={{display: visible ? 'inline' : 'none'}}>Go to top</button> 
  );
}
  
export default ScrollTop;