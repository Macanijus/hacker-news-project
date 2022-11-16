import React, { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Search from './Components/Search';
import Spinner from './Components/Spinner';

function App() {
  const [searchWord, setSearchWord] = useState("");

  const handleSearchChange = (searchW) =>{
    setSearchWord(searchW)
  }

  return (
    <div className="App">
      <Navbar handleSearchChange = { handleSearchChange } />
      <Search searchWord = { searchWord } />      
    </div>
  );
}

export default App;
