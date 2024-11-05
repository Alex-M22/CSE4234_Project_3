import { useState,useEffect } from 'react'
import './CardHolder.css'
import {countWords, countSentences, countSyllables, computeFleschIndex, classifyArticleReadability} from './../../counter.jsx'
import ArticleCard from './../ArticleCard/ArticleCard.jsx'

// global list
let arts = [];


export default function CardHolder(props) {

    // class constants
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errs, setErrs] = useState(null);

    // uses useEffect (lol) to parse the json
    useEffect(() => {
        fetch("./src/data/news_articles.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let count = 0;
                    result.map(art => {
                        // for each json item create an object
                        let sing = {
                            topic : art.topic,
                            link : art.link,
                            date: new Date(art.published_date),
                            domain : art.domain,
                            title : art.title,
                            lang : art.lang,
                            image : art.large_image_url,
                            content : art.content,
                            words : countWords(art.content),
                            sentences : countSentences(art.content),
                            syllables : countSyllables(art.content),
                            flesch : computeFleschIndex(countWords(art.content),countSentences(art.content), countSyllables(art.content)),
                            grade : classifyArticleReadability(countWords(art.content),countSentences(art.content), countSyllables(art.content)),
                            excerpt : art.content.slice(0,147) + "...",
                            id: "article" + String(count)
                            
                        }
                        count += 1;
                        arts.push(sing);

                    })
                    // from the slides
                    setLoading(false);
                    setArticles(arts);
                },
                (error) => {
                    setLoading(false);
                    setErrs(error);
                }
                )

    }, [])

// Error checking
if (errs) {
        return <div> Error:{errs.message}</div>;
    } else if (loading) {
        return <div>Loading... </div>
    } else {
        // creates a card of every news article 
        return (
          <div id="card-holder">
        {articles.map(art => {
          return <ArticleCard data={art} key={art.id} />; 
        })}
        </div>
        );
        
    }
}

export function filter(){
    

    // grabs value in search bar every time it changes
    const selection = document.querySelector("#search-bar").value;
    arts.map(article => {
        // grab card element by id
        let cc = document.getElementById(article.id); 
        cc.style.display = "flex";
        // if not in the current category, hide
        if (String(article.grade) !== selection) {
            cc.style.display = "none";
        }
    })
    

}



