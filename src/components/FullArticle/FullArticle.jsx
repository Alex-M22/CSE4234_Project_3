import { useState } from 'react'
import './FullArticle.css'
import {useCardContext} from '../cardContext/CardContext';

export const FullArticle = ({isDisplayed}) => {
      const {cardInfo} = useCardContext();

      const newDomain = () => new URL(cardInfo['link'].origin);
      // Gotten from ArticleCard.jsx
      const newDate = new Date(cardInfo['date']).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      });

      // Topic, link, date, domain, title, lang, image, content, words, sentences, syllables, flesch, grade, excerpt, id
      return (
          isDisplayed && (
          <div class='article'>
                <img src={cardInfo['image']}/>
                <p id='link'>{cardInfo['domain']}</p>
                <h1 id='title'>{cardInfo['title']}</h1>
                <p id='date'>{newDate}</p>
                <p id='topic'>{cardInfo['topic']}</p>
                <p id='content'>{cardInfo['content']}</p>
                <table>
                      <tbody>
                        <tr id="odd-rows">
                              <td>Word Count</td>
                              <td>{cardInfo['words']}</td>
                        </tr>
                        <tr id="even-rows">
                              <td>Sentence Count</td>
                              <td>{cardInfo['sentences']}</td>
                        </tr>
                        <tr id="odd-rows">
                              <td>Syllable Count</td>
                              <td>{cardInfo['syllables']}</td>
                        </tr>
                        <tr id="even-rows">
                              <td>Flesch Index</td>
                              <td>{cardInfo['flesch']}</td>
                        </tr>
                        <tr id="odd-rows">
                              <td>Grade level</td>
                              <td>{cardInfo['grade']}</td>
                        </tr>
                      </tbody>
                </table>
          </div>
          )
      )}

export default FullArticle;
