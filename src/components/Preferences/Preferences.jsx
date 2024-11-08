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
    FcCheckmark
} from "react-icons/fc";
import { FaEarthAmericas } from "react-icons/fa6";
import './Preferences.css';

function Preferences() {

  const [isChecked, setCheck] = useState(false);

  const handleCheck = () => {
      // Acts as a toggle for check
      setCheck(!isChecked);
  };
  return(
      <div className="Preferences-Box">
        <TbCircleLetterX size={20} id="Exit"/>
        <p id="Header"><strong>Select news categories to fine-tune your feed</strong></p>
        <table id="Preferences">
            <tbody>
                <tr>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcBiotech className="Icons"/>}
                        <p>SCIENCE</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcElectronics className="Icons"/>}
                        <p>TECHNOLOGY</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcLike className="Icons"/>}
                        <p>HEALTH</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FaEarthAmericas className="Icons"/>}
                        <p>WORLD</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcFilm className="Icons"/>}
                        <p>ENTERTAINMENT</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcSportsMode className="Icons"/>}
                        <p>SPORTS</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcBusiness className="Icons"/>}
                        <p>BUSINESS</p>
                    </td>
                    <td className="td-border" onClick={handleCheck}>
                        {isChecked ? <FcOk className="Icons"/> : <FcLandscape className="Icons"/>}
                        <p>NATION</p>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  );
}

export default Preferences;
