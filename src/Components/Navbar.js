import "./navbar.css";

export default function Navbar({handleSearchChange}) {
  return (
    <div>
      <section>
        <div className="nav">
          <h1 id="title"> Hacker News </h1>
          <input 
            type='text'
            onKeyDown={(e) => handleSearchChange(e.target.value)}
            placeholder="search posts"/>
        </div>
      </section>
    </div>
  )
}