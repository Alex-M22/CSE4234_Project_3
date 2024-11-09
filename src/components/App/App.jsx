import {createContext, useContext, useState} from 'react'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import Preferences from '../Preferences/Preferences.jsx'
import User from "../User/User.jsx";
import FullArticle from "../FullArticle/FullArticle.jsx";
import {CardContextProvider} from '../cardContext/CardContext'

export default function App(props) {
    const [count, setCount] = useState(0);
    // Preferences visibility state
    const [prefsVisible, setPrefsVisible] = useState(false);
    // Card visibility state
    const [isDisplayed, setIsDisplayed] = useState(false);

    // If article is opened, only render the article
    if (!isDisplayed) {
        return (
            <User>
                <div id="app">
                    {/*Preventing ArticleCard and FullArticle from displaying while passing CardHolder a hook to reveal FullArticle*/}
                    <CardContextProvider>
                        <FullArticle isDisplayed={isDisplayed}/>
                        {/* Passing down prop for opening preferences button*/}
                        <Navigation setPrefsVisible={setPrefsVisible}/>
                        {/* Passing down prop for exiting preferences*/}
                        {prefsVisible && <Preferences setPrefsVisible={setPrefsVisible}/>}
                        <Search/>
                        {/*Pass down state variable method to Article Card through CardHolder*/}
                        <CardHolder setIsDisplayed={setIsDisplayed}/>
                    </CardContextProvider>
                </div>
            </User>
        )
    } else {
        return (
            <User>
                <div id="app">
                    {/*Preventing ArticleCard and FullArticle from displaying while passing CardHolder a hook to reveal FullArticle*/}
                    <CardContextProvider>
                        <FullArticle isDisplayed={isDisplayed}/>
                        {prefsVisible && <Preferences setPrefsVisible={setPrefsVisible}/>}
                    </CardContextProvider>
                </div>
            </User>
        )
    };

};


