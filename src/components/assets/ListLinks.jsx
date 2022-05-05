import React from "react";

export default function ListLinks(props){
    return (
        <li>
            <a href={props.link}>
                <h2>{props.pagina}</h2>
            </a>
        </li>
    )
}