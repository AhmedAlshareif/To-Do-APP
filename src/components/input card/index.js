import React from 'react';
import Button from "../button";
import "./style.css"


function InputCard({ onchange, value , onclick}) {

    return ( 
        <div className="card">
            <input placeholder="What would you like to do?" value={value} onChange={onchange} className="input-card" />
            <Button text="Add" className="bg-red"  onclick={onclick}/>
        </div>
    );
}

export default InputCard;