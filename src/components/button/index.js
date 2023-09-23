import React from 'react';
import "./style.css"
function Button({text, className, onclick}) {
    return (
        <button type="button" className={`btn ${className}`} onClick={onclick}>
            {text}
        </button>
    );
}

export default Button;