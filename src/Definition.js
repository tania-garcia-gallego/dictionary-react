import React from "react";
import "./Definition.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Definition(props) {
    if (props.definition) {
         return  (
            <div className="Definitions">
                <section>
             <h2 >{props.definition.word}</h2>
             {props.definition.phonetics.map(function (phonetic, index) {
                 return (
                     <div key={index}>
                         <Phonetic phonetic={phonetic} />
                     </div>
                 )
             })}
             </section>
             {props.definition.meanings.map(function(meaning, index) {
                 return (
                     <section key={index}>
                         <Meaning meaning={meaning}/>
                     </section>
                 );
             })}
                 
         </div>
         );
         } else { return null};
    }