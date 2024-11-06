import { useState } from 'react'

function Navigation() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button type="button" id="preferences" name="preferences" onClick=""> Preferences </button>

        </>
    )
}

export default Navigation
