import React, { useState, useEffect } from 'react';
import RowItem from "../row item";
import "./style.css"


function TodosCard( {data}) {
    
    return (
        <div className="card todo-card">
           <h2>
               Todo list
           </h2>
            <table>
                <tr>
                    <th>List</th>
                    <th>Status</th>
                    <th>Close</th>
                </tr>


                {data.map((item)=>
                <RowItem item={item} 
                />
                 )}
                
            
            </table>
        </div>
    );
}

export default TodosCard;