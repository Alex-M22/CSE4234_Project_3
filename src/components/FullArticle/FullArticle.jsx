import { useState } from 'react'
import './FullArticle.css'
import { showList } from './../App/App.jsx'

export function FullArticle(props) {

      // Gotten from ArticleCard.jsx
      const newDate = new Date(props.data.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      });

      // Topic, link, date, domain, title, lang, image, content, words, sentences, syllables, flesch, grade, excerpt, id
      return (
            <>
            <button className="backButton" onClick={() => showList(props.data.id, props.yPos)}>Back</button>
            <div className='fullArticle'>

                <img src={props.data.image}/>
                <p id='link'>{props.data.domain}</p>
                <h1 id='title'>{props.data.title}</h1>
                <p id='date'>{newDate}</p>
                <p id='topic'>{props.data.topic}</p>
                <p id='content'>{props.data.content}</p>
                <table>
                      <tbody>
                        <tr className="odd-rows">
                              <td>Word Count</td>
                              <td>{props.data.words}</td>
                        </tr>
                        <tr className="even-rows">
                              <td>Sentence Count</td>
                              <td>{props.data.sentences}</td>
                        </tr>
                        <tr className="odd-rows">
                              <td>Syllable Count</td>
                              <td>{props.data.syllables}</td>
                        </tr>
                        <tr className="even-rows">
                              <td>Flesch Index</td>
                              <td>{props.data.flesch}</td>
                        </tr>
                        <tr className="odd-rows">
                              <td>Grade level</td>
                              <td>{props.data.grade}</td>
                        </tr>
                      </tbody>
                </table>
          </div>
          </>
      )
}

export default FullArticle;
