import React, {useState, createContext} from 'react';
import './User.css';

export const userPrefsContext = createContext();

function User() {
// This can be altered in preferences onclick
    const [userPrefs, setUserPrefs] = useState([
        {science: true},
        {technology: true},
        {health: true},
        {world: true},
        {entertainment: true},
        {sports: true},
        {business: true},
        {national: true},
    ]);

    return (
        <userPrefsContext.Provider value={{userPrefs, setUserPrefs}}></userPrefsContext.Provider>
    );
}

export default User
