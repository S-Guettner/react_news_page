

const NewsCard = (props) => {
    return ( 
        <article className="h-[35rem] pb-4 shadow-md flex flex-col justify-between">
            <img className="h-40 mb-6" src={props.articleImage} alt="noImage" />
            <h2 className="text-xl mb-4">{props.articleTitle}</h2>
            <p>{props.articleDescription}</p>
            <p>{props.articleDate}</p>
            <a className="p-1 text-white bg-stone-600" href={props.articleLink}>Read more</a>
        </article>
    );
}

export default NewsCard;