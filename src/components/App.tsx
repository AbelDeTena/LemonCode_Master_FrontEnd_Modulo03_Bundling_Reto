import React, { useState } from 'react';
import logo from "../assets/logo_2.png";
import classes from "../cssModules/hello.module.scss";

export function App() {
  const [count, setCount] = useState(0);

  return (  
      <div className="App">      
        <h1 className={classes.title}>Welcome to my seed project with Parcel, Lemoncoders!</h1>
        <img src={logo}  alt="logo" />        
        <button className={classes.mybutton} onClick={() => setCount((count) => count +1)}>
            count is: {count}
        </button>        
      </div>    
  );
}

