import { useState } from 'react'
import './ArticleCard.css'
import Cardholder from '../CardHolder/CardHolder.jsx'

// 42414c

function ArticleCard(props) {
  const [count, setCount] = useState(0)

  // image, tag, link, title, date, excerpt
  const { topic, title, link, date, image, excerpt } = props.data;
  const mainUrl = new URL(link).origin;

  const newDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',  // "Monday"
    year: 'numeric',  // "2024"
    month: 'long',    // "November"
    day: 'numeric'    // "7"
  });

  return (
    <>
    <div className="article-card">
      <div className="article-image-container">
        <img src={image} alt="Article" className="article-image" />
        <span className="article-topic">{topic}</span>
      </div>
      <div className="article-content">
        <p className="article-url"><a href={link} target="_blank" rel="noopener noreferrer">{mainUrl}</a></p>
        <h2 className="article-title">{title}</h2>
        <small className="article-date">{newDate}</small>
        <p className="article-excerpt">{excerpt || "Something went wrong, please try again later."}</p>
      </div>
    </div>
    </>
  )
}

export default ArticleCard;

