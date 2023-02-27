import {useState, useEffect} from 'react'
import NewsCard from '../components/NewsCard'
import { v4 as uuidv4 } from 'uuid';

const NewsPage = () => {
    
    const [news,setNews] = useState([])
    const [search,setSearch] = useState("tesla")
    const [language,setLanguage] = useState("de")

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${search}&language=${language}&apiKey=67e41cd862a2440dabee7d6bf60ad9f6`)
        .then(response => response.json())
        .then(data => {
            setNews(data.articles)
        })
    },[search , language ])


    return(
        <section>
            <input onChange={(e)=> setSearch(e.target.value)} className='border-2 border-black' type="text" />

            <select onChange={(e) => {setLanguage(e.target.value)}} name="languageInput" >
                <option value="de">de</option>
                <option value="en">en</option>
                <option value="es">es</option>
                <option value="fr">fr</option>
                <option value="it">it</option>
                <option value="nl">nl</option>
                <option value="pl">pl</option>
            </select>

            
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-center overflow-x-hidden">
        {news.map((article) => {
            
            return (
            <NewsCard 
                key = {uuidv4()}
                articleImage = {article.urlToImage}
                articleTitle = {article.title}
                articleDescription = {article.description}
                articleDate = {(article.publishedAt).slice(0,10)}
                articleLink = {article.url}
            />)
        })}

        </div>
        </section>
        )
}

export default NewsPage;