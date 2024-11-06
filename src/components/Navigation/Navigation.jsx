import { useState } from 'react'
import './Navigation.css'

function Navigation() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button type="button" id="preferences-button" name="preferences" onClick=""> Preferences </button>

        </>
    )
}

export default Navigation
