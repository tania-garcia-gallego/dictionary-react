import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
    return(
        <strong>
        <div className="Synonyms">
            {props.synonyms.map(function(synonym, index) {
                return <span key={index}>{synonym}{",   "}</span>;
            }
            )}

        </div></strong>
    );}
    else {
        return null;
    }
}