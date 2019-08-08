import React from "react";
import "./tileStyle.css";

function MemoryTiles(props) {
    return (
        <div
            className="tile"
            role="img"
            id={props.id}
            onClick={() => props.memoryCheck(props.id)}
        >
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default MemoryTiles;