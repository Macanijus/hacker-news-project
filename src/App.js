import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Search from './Components/Search';
import Spinner from './Components/Spinner';
// import {SpinnerCircular} from "spinners-react";

function App() {
  
  
  
  
  return (
    <div className="App">
      <Navbar/>
      <Search />
    {/* <SpinnerCircular size={50} thickness={150} speed={2000} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" /> */}
      
    </div>
  );
}

export default App;
