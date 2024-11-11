import { useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import FullArticle from './../FullArticle/FullArticle.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import Preferences from '../Preferences/Preferences.jsx'
import User from '../User/User.jsx'

export const root = ReactDOM.createRoot(document.querySelector('main'));
export let fullRoot = ReactDOM.createRoot(document.querySelector('#fullDiv'));


export default function App(props) {
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



export function showFull(data) {

    const el = document.getElementById(data.id);
    const yPos = el.getBoundingClientRect().top;
    const bodPos = document.body.getBoundingClientRect().top;
    document.querySelector("#app").style.display = "none";
    document.querySelector("header").style.display = "none";

    fullRoot.render(
        <FullArticle data={data} yPos={yPos - bodPos}/>
    );
            


   
}

export function showList(id, yPos) {

    fullRoot.unmount()
    fullRoot = ReactDOM.createRoot(document.querySelector('#fullDiv'));
    document.querySelector("#app").style.display = "block";
    document.querySelector("header").style.display = "flex";

    scroll(0,yPos);

   
}

