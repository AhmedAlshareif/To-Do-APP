import React from 'react';
import Button from "../button";
import { FaTrashAlt } from "react-icons/fa";

function RowItem({item} , onClick) {
    
    return (
        <tr>
            <td className='title'>{item.title}</td>
            <td><Button className={item.completed ?"bg-green " : "bg-red "}  text={item.completed ?"completed" : "pindding"}/> </td>
            <td><FaTrashAlt color={"#e63946"} cursor={"pointer"} onClick={onClick} /></td>

        </tr>
    );
}

export default RowItem;