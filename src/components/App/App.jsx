import { useState } from 'react'
import './App.css'
import Search from '../Search/Search.jsx'
import CardHolder from '../CardHolder/CardHolder.jsx'
import Preferences from '../Preferences/Preferences.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
    <Preferences/>
    <Search/>
    <CardHolder/>
    </>
  )
}




export default App
