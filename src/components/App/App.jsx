import { useState } from 'react'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import Preferences from '../Preferences/Preferences.jsx'
import Navigation from "../Navigation/Navigation.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (

      <div id="app">

      <Navigation/>
    <Preferences/>
    <Search/>
    <CardHolder/>
      </div>
    
  )
}




export default App
