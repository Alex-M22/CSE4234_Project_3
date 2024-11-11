import {useState, useContext} from 'react';
import { TbCircleLetterX } from "react-icons/tb";
import {
    FcOk,
    FcBusiness,
    FcElectronics,
    FcFilm,
    FcSportsMode,
    FcLike,
    FcBiotech,
    FcLandscape,
} from "react-icons/fc";
import { FaEarthAmericas } from "react-icons/fa6";
import './Preferences.css';
import User from "./../User/User.jsx"
import {filter} from './../CardHolder/CardHolder.jsx';


function Preferences() {

  const [topics, setTopics] = useContext(User);

  return(

        <div id="preferences">
            <TbCircleLetterX id="exit" onClick={() => {document.querySelector("#preferences").style.display = "none";}}/>
            <p id="header"><strong>Select news categories to fine-tune your feed</strong></p>
            <ul>
            <li className="pref-li"
                onClick={() => {topics.business = !topics.business; setTopics(topics); clicked("pref-b", "pref-b-ok", topics.business);filter(topics)}}>
                <FcOk id="pref-b-ok" className="icons"/>
                <FcBusiness id="pref-b" className="icons"/>
                Business</li>
            <li className="pref-li" onClick={() => {topics.entertainment = !topics.entertainment; setTopics(topics); clicked("pref-e", "pref-e-ok", topics.entertainment);filter(topics)}}>
                <FcOk id="pref-e-ok" className="icons"/>
                <FcFilm id="pref-e" className="icons"/>
                Entertainment</li>
            <li className="pref-li" onClick={() => {topics.health = !topics.health; setTopics(topics); clicked("pref-h", "pref-h-ok", topics.health);filter(topics)}}>
                <FcOk id="pref-h-ok" className="icons"/>
                <FcLike id="pref-h" className="icons"/>
                Health</li>
            <li className="pref-li" onClick={() => {topics.nation = !topics.nation; setTopics(topics); clicked("pref-n", "pref-n-ok", topics.nation);filter(topics)}}>
                <FcOk id="pref-n-ok" className="icons"/>
                <FcLandscape id="pref-n" className="icons"/>
                Nation</li>
            <li className="pref-li" onClick={() => {topics.science = !topics.science; setTopics(topics); clicked("pref-s", "pref-s-ok", topics.science);filter(topics)}}>
                <FcOk id="pref-s-ok" className="icons"/>
                <FcBiotech id="pref-s" className="icons"/>
                Science</li>
            <li className="pref-li" onClick={() => {topics.sports = !topics.sports; setTopics(topics); clicked("pref-p", "pref-p-ok", topics.sports);filter(topics)}}>
                <FcOk id="pref-p-ok" className="icons"/>
                <FcSportsMode id="pref-p" className="icons"/>
                Sports</li>
            <li className="pref-li" onClick={() => {topics.technology = !topics.technology; setTopics(topics); clicked("pref-t", "pref-t-ok", topics.technology);filter(topics)}}>
                <FcOk id="pref-t-ok" className="icons"/>
                <FcElectronics id="pref-t" className="icons"/>
                Technology</li>
            <li className="pref-li" onClick={() => {topics.world = !topics.world; setTopics(topics); clicked("pref-w", "pref-w-ok", topics.world);filter(topics)}}>
                <FcOk id="pref-w-ok" className="icons"/>
                <FaEarthAmericas id="pref-w" className="icons"/>
                World</li>
            </ul>
        </div>

  );
}

function clicked(em, ch, b) {
    let emoji = document.querySelector(`#${em}`);
    
    let check = document.querySelector(`#${ch}`);


    if (b) {
        emoji.style.display = "none";
        check.style.display = "inline";
    } else {
        emoji.style.display = "inline";
        check.style.display = "none";

    }  

}

export default Preferences;

