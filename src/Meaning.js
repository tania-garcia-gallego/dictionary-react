import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
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
                    </p>
                </div>
                );
})}
         
        </div>
    );
}