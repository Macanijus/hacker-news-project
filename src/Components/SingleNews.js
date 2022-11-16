import './singleNews.css'
export default function SingleNews({articles}){
    return(
        <div>
            {articles 
            ? articles.map((article , key)=>{
                return (
                    <div key={article.id} className="article">
                        
                        <h1 style={{cursor: "pointer", display: "inline-block"}}  onClick={() => window.open(article.url, "_blank")}>{article.title}</h1>
                        <p>Article by {article.author} | Created at {article.created_at} | Number of comments {article.num_comments}</p>
                        
                    
                    </div>
                );
            
         })
            : " no posts"}
        </div>
    );
}