import { useEffect, useState } from "react"
import SingleNews from "./SingleNews";
import "./singleNews.css"
import {SpinnerCircular} from "spinners-react";


export default function Search(){
    const [userInput , setUserInput] = useState("");
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(true);
    
    
    

    const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`;
   

   const handleSubmit = event => {
    event.preventDefault();
   }


    function fetchData(){
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setArticles(data.hits);
            setLoading(false);
            console.log(data.hits);
        })
        .catch((e) => console.log(e));
    }
    
    

    
    useEffect(()=>{
        fetchData();
    }, [userInput] );

    

    return (
        <div>
            {loading ? (
                <div className="spinner">
                    <SpinnerCircular />
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit} className="search-bar" >
                        <input 
                        type='text'
                        value= {userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="search posts"/>
                        <button type="submit" >Search</button>
                    </form>
                    <SingleNews articles={articles}/>
                </div>
            )}
        </div>
    
    )
}