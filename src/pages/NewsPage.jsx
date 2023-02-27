import {useState, useEffect} from 'react'
import NewsCard from '../components/NewsCard'
import { v4 as uuidv4 } from 'uuid';

const NewsPage = () => {
    
    const [news,setNews] = useState([])
    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=8d2aeaf407954f059f5ddf5ca56ab42c`)
        .then(response => response.json())
        .then(data => {
            setNews(data.articles)
        })
    },[])


    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-center">
        {news.map((article) => {
            console.log((article.url).slice(0,10))
            
            return (<NewsCard 
            key = {uuidv4()}
            articleImage = {article.urlToImage}
            articleTitle = {article.title}
            articleDescription = {article.description}
            articleDate = {(article.publishedAt).slice(0,10)}
            articleLink = {article.url}
            />)
        })}

        </div>
        )
}
 
export default NewsPage;