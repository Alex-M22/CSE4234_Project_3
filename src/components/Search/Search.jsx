import { useState, useEffect, useContext } from 'react';
import './Search.css';
import {filter} from './../CardHolder/CardHolder.jsx';
import CardHolder from './../CardHolder/CardHolder.jsx';


function Search() {

    return (
        <div id="search-box">
            <select id="search-bar" onChange={() => filter()}>
                <option value="">Select an Option</option>  
                <option value="5">5th grade</option>
                <option value="6th grade">6th grade</option>
                <option value="7th grade">7th grade</option>
                <option value="8th grade & 9th grade">8th & 9th grade</option>
                <option value="10th grade to 12th grade">10th to 12th grade</option>
                <option value="College">College</option>
                <option value="College graduate">College graduate</option>
            </select>

        </div>
    )
     
}


export default Search
