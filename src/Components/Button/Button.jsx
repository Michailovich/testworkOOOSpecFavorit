import React from 'react';
import './Button.css'
const Button = ({name}) => {
    return (
        <button className='button' onClick={(e)=>{e.preventDefault()}}>{name}</button>
    );
};

export default Button;