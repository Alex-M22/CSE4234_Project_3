import React, {useState, createContext} from 'react';
import './User.css';
import '../Preferences/Preferences.jsx'

export const userPrefsContext = createContext();

export const User = ({children}) => {
    // This can be altered in preferences onclick
    const [userPrefs, setUserPrefs] = useState([
        {SCIENCE: false},
        {TECHNOLOGY: false},
        {HEALTH: false},
        {WORLD: false},
        {ENTERTAINMENT: false},
        {SPORTS: false},
        {BUSINESS: false},
        {NATION: false},
    ]);
    return (
        <userPrefsContext.Provider value={{userPrefs, setUserPrefs}}>
            {children}
        </userPrefsContext.Provider>
    );
}

export default User;
