import {useState, useEffect} from 'react'
import NewsCard from './NewsCard'

const NewsPage = () => {
    
    const [news,setNews] = useState([])
    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c296de1e76b94e48bba47d88a5535faa`)
        .then(response => response.json())
        .then(data => {
            setNews(data.articles)
        })
    },[])

    news.map((article) => {
        console.log(article.title)
        
        return <NewsCard 
        
        articleTitle = {article.title}

        />
    })
    
    



/*     newsData.map((item) => {
        console.log(item.title)
    }) */



    return ( 
        <h1>test</h1>
     );
}
 
export default NewsPage;