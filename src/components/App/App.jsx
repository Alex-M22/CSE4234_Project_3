import { useState } from 'react'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import Preferences from '../Preferences/Preferences.jsx'

export default function App(props) {
    const [count, setCount] = useState(0);
    const [prefsVisible, setPrefsVisible] = useState(false);
        // <UserContext.Provider value={topics}>
    return (
        <div id="app">
        {/* Passing down prop */}
        <Navigation setPrefsVisible={setPrefsVisible}/>
        {/* If set as visible, show the component*/}
        {prefsVisible && <Preferences/>}
        <Search/>
        <CardHolder/>
        </div>
        )
        // </UserContext.Provider>
}

