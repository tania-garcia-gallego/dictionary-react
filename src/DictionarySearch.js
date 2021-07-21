import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
    let [word , setWord] = useState("");

    function Search(event){
        event.preventDefault();
        alert ( `Searching for ${word} definition`);
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