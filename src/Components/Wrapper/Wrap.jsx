import React from 'react';
import './Wrap.css'

const Wrap = ({children}) => {
    return (
        <div className='wrap' onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    );
};

export default Wrap;