import React from "react";


function Display (props){
    return (
        <div>
        <h2>{props.title}</h2>
        <img src={props.url}></img>
        </div>
    );
}

export default Display;