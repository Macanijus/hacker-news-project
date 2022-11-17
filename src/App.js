import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  const [searchWord, setSearchWord] = useState("");

  const handleSearchChange = (searchW) => {
    setSearchWord(searchW);
  };

  return (
    <div className="App">
      <Navbar handleSearchChange={handleSearchChange} />
      <Search articlesPerPage={6} searchWord={searchWord} />
    </div>
  );
}

export default App;
