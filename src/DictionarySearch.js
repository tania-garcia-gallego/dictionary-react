import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";


export default function DictionarySearch() {
    let [word , setWord] = useState("");

    function HandleResponse(response){
        console.log(response.data);
    }
    

    function Search(event){
        event.preventDefault();
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

        axios.get(apiUrl).then(HandleResponse);
    }

    function HandleWord(event) {
        setWord(event.target.value);
    }


    return (<div>
        <form onSubmit={Search}>
            <input type="search" placeholder="Look up a word..." onChange={HandleWord}></input>
            <button type="submit">Search</button>

        </form>
    </div>)
}