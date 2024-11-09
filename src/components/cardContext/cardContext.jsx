import React, {createContext, useContext, useState} from 'react';

// Maintains card information throughout app for displaying accurate Article information
const CardContext = createContext();

export const CardContextProvider = ({children}) => {
    // State variable for object info
    const [cardInfo, setCardInfo] = useState({});

    return (
        <CardContext.Provider value={{cardInfo, setCardInfo}}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);