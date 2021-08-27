import React from "react";

function ItemX({ id, item, onCheck }) {
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            {item}  
        </li>
        </>
    )
}

export default ItemX;