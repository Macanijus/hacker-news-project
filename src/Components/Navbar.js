import "./navbar.css";
export default function Navbar() {


  

  return (
    <div>
      <section>
        <div className="nav">
        <h1 id="title"> Hacker News </h1>
           <div className="input-field">
          <form>
            <input type="text" name="search" placeholder="search posts"/>
            <button>Search</button>
          </form>
          </div>
        </div>
      </section>
     
    </div>
  )
}