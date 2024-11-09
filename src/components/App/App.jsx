import { useState } from 'react'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import Preferences from '../Preferences/Preferences.jsx'
import User from "../User/User.jsx";

export default function App(props) {
    const [count, setCount] = useState(0);
    const [prefsVisible, setPrefsVisible] = useState(false);
        // <UserContext.Provider value={topics}>
    return (
        <User>
        <div id="app">
        {/* Passing down prop for opening preferences button*/}
        <Navigation setPrefsVisible={setPrefsVisible}/>
        {/* Passing down prop for exiting preferences*/}
        {prefsVisible && <Preferences setPrefsVisible={setPrefsVisible}/>}
        <Search/>
        <CardHolder/>
        </div>
        </User>
        )
}

