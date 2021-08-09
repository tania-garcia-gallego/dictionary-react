import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import Definition from "./Definition.js";
import Photos from "./Photos.js";


export default function DictionarySearch() {
    let [word , setWord] = useState("");
    let [definition, setDefinition] = useState(null);
    let [photos, setPhotos] = useState(null);

    function HandleResponse(response){
    
        setDefinition(response.data[0]);
    }
    
    function HandlePexelsResponse (response) {
        setPhotos(response.data.photos);
    
    }

    function Search(event){
        event.preventDefault();
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

        axios.get(apiUrl).then(HandleResponse);

        let pexelsApiKey = "563492ad6f917000010000013f951cbb00114728835d7adf7915ba3a";
        let pexelsApiUrl =  `https://api.pexels.com/v1/search?query=${word}&per_page=3`;

        axios.get(pexelsApiUrl, { headers : { "Authorization" :  ` Bearer ${pexelsApiKey}` }}).then(HandlePexelsResponse);
    }

    function HandleWord(event) {
        setWord(event.target.value);
    }


    return (<div>
        
        <form onSubmit={Search}>
            <input type="search" placeholder="Look up a word..." onChange={HandleWord}></input>
            <button type="submit">Search</button>
          
        </form>
        
          <Definition definition={definition}/>
          <Photos photos={photos} />
    </div>)
}