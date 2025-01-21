import { useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import FullArticle from './../FullArticle/FullArticle.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import Preferences from '../Preferences/Preferences.jsx'
import User from '../User/User.jsx'


// create roots for app and full article components
export const root = ReactDOM.createRoot(document.querySelector('main'));
export let fullRoot = ReactDOM.createRoot(document.querySelector('#fullDiv'));


export default function App(props) {
    // Instantiate dictionary of topics 
    const [topics, setTopics] = useState({
        science: false,
        technology: false,
        health: false,
        world: false,
        entertainment: false,
        sports: false,
        business: false,
        nation: false,
    });

    // Add components to webpage
    return (
        <User.Provider value={[topics, setTopics]}>
        <div id="app">
        <Navigation/>
        <Search/>
        <Preferences/>
        <CardHolder/>
        </div>
        </User.Provider>
        )
}


// When called, it will display a full article of article cliked  
export function showFull(data) {

    // Get id, yposition, and position in body
    const el = document.getElementById(data.id);
    const yPos = el.getBoundingClientRect().top;
    const bodPos = document.body.getBoundingClientRect().top;

    // Hide the cardholder, search, and logo 
    document.querySelector("#app").style.display = "none";
    document.querySelector("header").style.display = "none";

    // display Full Article
    fullRoot.render(
        <FullArticle data={data} yPos={yPos - bodPos}/>
    );
            


   
}


// When a Back button is clicked, display the main page
export function showList(id, yPos) {

    // remove then add back the root of full article 
    fullRoot.unmount()
    fullRoot = ReactDOM.createRoot(document.querySelector('#fullDiv'));

    // Show card holder, search, etc.
    document.querySelector("#app").style.display = "block";
    document.querySelector("header").style.display = "flex";

    // move the page to the article clicked
    scroll(0,yPos);

   
}

