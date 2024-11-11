import { useState } from 'react'
import './Navigation.css'

function Navigation() {
    const displayPrefs = () => {
        // Set to the opposite of its previous visibility state*
        setPrefsVisible((isVisible) => !isVisible)
    }
    return (

        <nav id="navigation">
            <button type="button" id="preferences-button" name="preferences" onClick={() => {document.querySelector("#preferences").style.display = "flex";}}>Preferences</button>
        </nav>

    )
}
export default Navigation
