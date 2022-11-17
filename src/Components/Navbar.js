import "./navbar.css";

export default function Navbar({handleSearchChange}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchChange(event.target.value);
      console.log("inside the function: ", event.target.value);
    }
  };
  return (
    <div>
      <section>
        <div className="nav">
          <h1 id="title"> Hacker News </h1>
          <input 
            type='text'
            onKeyDown={ handleKeyDown }
            placeholder="search posts"/>
        </div>
      </section>
    </div>
  )
}
