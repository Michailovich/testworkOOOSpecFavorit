import React from 'react';
import './Input.css'
import IMask from 'imask';

var phoneMask = IMask(
    document.getElementById(1), {
      mask: '+{7}(000)000-00-00'});

const Input = ({id,placeholder,mask,setPassword,setPhone}) => {
    
    return (
        <div className='box'>
            <label className='label' htmlFor={id}>Введите {placeholder}</label>
            {mask
            ?
            <input
                id={id}
                className='input phone-mask'
                onChange={(e)=>setPhone(e.target.value)}
            ></input>
            /*<IMaskInput
            className='input'
            mask='+7 (000) 000-00-00'
            radix="."
            onAccept={(e)=>setPhone(e.target.value)}
            value=""
            unmask={true} // true|false|'typed'
            placeholder='+7'
          />*/
            :<input 
            className='input'
            onChange={(e)=>setPassword(e.target.value)}
            id={id} type="password" />}
        </div>
        
    );
};

export default Input;