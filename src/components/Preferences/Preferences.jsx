import {useState, useContext} from 'react';
import { TbCircleLetterX } from "react-icons/tb";
import {
    FcOk,
    FcBusiness,
    FcElectronics,
    FcFilm,
    FcSportsMode,
    FcLike,
    FcBiotech,
    FcLandscape,
} from "react-icons/fc";
import { FaEarthAmericas } from "react-icons/fa6";
import './Preferences.css';
import {userPrefsContext} from "../User/User.jsx";

// eslint-disable-next-line react/prop-types
function Preferences({setPrefsVisible}) {
  const {userPrefs, setUserPrefs} = useContext(userPrefsContext);

  // Set user context variable to true or false for filtering, and a corresponding checkmark
  // Spread by dr fitz for shallow copy
  const handleCheck = (key) => {
    setUserPrefs((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
    }));
  };

  // Remove visibility with 'X' button
  const displayPrefs = () => {
      {/* Set to the opposite of its previous visibility state*/}
      setPrefsVisible((isVisible) => !isVisible)
  }

  return(
      <div className="Preferences-Box">
        <TbCircleLetterX size={20} id="Exit" onClick={displayPrefs}/>
        <p id="Header"><strong>Select news categories to fine-tune your feed</strong></p>
        <table id="Preferences">
            <tbody>
                <tr>
                    {/*On click, if the index (passed in as a prop) is checked (state), display, or else just show icon* and context*/}
                    <td className="td-border" onClick={() => handleCheck("SCIENCE")}>
                        {userPrefs["SCIENCE"] ? <FcOk className="Icons"/> : <FcBiotech className="Icons"/>}
                        <p>SCIENCE</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("ELECTRONICS")}>
                        {userPrefs["ELECTRONICS"] ? <FcOk className="Icons"/> : <FcElectronics className="Icons"/>}
                        <p>TECHNOLOGY</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("HEALTH")}>
                        {userPrefs["HEALTH"] ? <FcOk className="Icons"/> : <FcLike className="Icons"/>}
                        <p>HEALTH</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("WORLD")}>
                        {userPrefs["WORLD"] ? <FcOk className="Icons"/> : <FaEarthAmericas className="Icons"/>}
                        <p>WORLD</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("ENTERTAINMENT")}>
                        {userPrefs["ENTERTAINMENT"] ? <FcOk className="Icons"/> : <FcFilm className="Icons"/>}
                        <p>ENTERTAINMENT</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="td-border" onClick={() => handleCheck("SPORTS")}>
                        {userPrefs["SPORTS"] ? <FcOk className="Icons"/> : <FcSportsMode className="Icons"/>}
                        <p>SPORTS</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("BUSINESS")}>
                        {userPrefs["BUSINESS"] ? <FcOk className="Icons"/> : <FcBusiness className="Icons"/>}
                        <p>BUSINESS</p>
                    </td>
                    <td className="td-border" onClick={() => handleCheck("NATION")}>
                        {userPrefs["NATION"] ? <FcOk className="Icons"/> : <FcLandscape className="Icons"/>}
                        <p>NATION</p>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  );
}

export default Preferences;
