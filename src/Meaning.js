import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
        <div>
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition, index)
            {
                return (
                <div  key="index">
                    <p className="DefinitionText">
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        <br />
                        <Synonyms synonyms={definition.synonyms} />                       
                    </p>
                </div>
                );
})}
         
        </div>
    );
}