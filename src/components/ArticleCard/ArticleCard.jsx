import { useState } from 'react'
import './ArticleCard.css'
import { showFull } from './../App/App.jsx'

function ArticleCard(props) {


  // image, tag, link, title, date, excerpt
  const { topic, title, link, date, image, excerpt } = props.data;
  const mainUrl = new URL(link).origin;

  const newDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (   
    <div id={props.data.id} className="article-card">
      <div className="article-image-container">
        <img src={image} alt="Article" className="article-image" />
        <span className="article-topic">{topic}</span>
      </div>
      <div className="article-content">
        <p className="article-url"><a href={link} target="_blank" rel="noopener noreferrer">{mainUrl}</a></p>
        {/* Set article contents once a file is clicked on*/}
        <h2 className="article-title" onClick={() => showFull(props.data)}>{title}</h2>
        <small className="article-date">{newDate}</small>
        <p className="article-excerpt">{excerpt || "Something went wrong, please try again later."}</p>
      </div>
    </div>
  )
}

export default ArticleCard;

