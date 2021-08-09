import React from "react";
import "./Photos.css";

export default function Photos(props){
    console.log(props);
    if (props.photos){
    return(
        <section className="Photos">
            <container className="row">
               
            {props.photos.map(function(photo, index) {
                return (
                 <div className="col">
                     <img src={photo.src.small} />
                     </div>);
            }
            )}
         
            </container>
        </section>
    );
}
else {
    return null;
}
}