import React from 'react';

import './form-input.styles.scss';


const FormInput = (handleChnage, ...otherProps) => {

    <div className="form">
     <input  className='form-input' onChange={handleChange} {...otherProps}>

     { label ? (

         <label className={`${otherProps.label.important ? 'important': '' }`}></label>
     )}

    </div>

}

