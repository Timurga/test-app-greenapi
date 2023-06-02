import React from 'react';
import '../../../styles.sass'

const TextInput = ({ value, onChange, placeholder}) => {
    return (
        <input
            className='input'
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
        />
    );
}

export default TextInput;

