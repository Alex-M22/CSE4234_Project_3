import { useState } from 'react'
import './Navigation.css'

function Navigation({setPrefsVisible}) {
    const [count, setCount] = useState(0)
    const displayPrefs = () => {
        {/* Set to the opposite of its previous visibility state*/}
        setPrefsVisible((isVisible) => !isVisible)
    }
    return (
        <>
            <button type="button" id="preferences-button" name="preferences" onClick={displayPrefs}> Preferences </button>

        </>
    )
}

export default Navigation
