import "./navbar.css";
import SearchChange from "../App"

export default function Navbar(handleSearchChange) {
  const onChange = (searchText) => {
    console.log("NAVBAR: ", searchText);
    handleSearchChange(searchText);
  }

  return (
    <div>
      <section>
        <div className="nav">
          <h1 id="title"> Hacker News </h1>
          <input 
            type='text'
            value= ""
            onChange={(e) => onChange(e.target.value)}
            placeholder="search posts"/>
        </div>
      </section>
    </div>
  )
}