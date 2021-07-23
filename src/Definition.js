import React from "react";
import "./Definition.css";
import Meaning from "./Meaning.js";

export default function Definition(props) {
    if (props.definition) {
         return  (
            <div className="Definitions">
             <h2 >{props.definition.word}</h2>
             {props.definition.meanings.map(function(meaning, index) {
                 return (
                     <div key={index}>
                         <Meaning meaning={meaning}/>
                     </div>
                 );
             })}
                 
         </div>
         );
         } else { return null};
    }