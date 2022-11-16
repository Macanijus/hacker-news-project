import { useEffect, useState } from "react"
import News from "./News";
import {SpinnerCircular} from "spinners-react";


export default function Search(searchWord){
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(true);
    const url = `http://hn.algolia.com/api/v1/search?query=${searchWord}&tags=story`;
    
    useEffect( () => {
        fetchData();
    }, [ searchWord ] );

    function fetchData() {
        console.log("Search: ", searchWord);
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

    return (
        <div>
            {loading ? (
                <div className="spinner">
                    <SpinnerCircular />
                </div>
            ) : (
                <div>
                    <News articles={articles}/>
                </div>
            )}
        </div>
    )
}