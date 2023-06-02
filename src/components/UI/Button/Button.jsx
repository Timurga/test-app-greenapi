import React from 'react';
import '../../../styles.sass'

const Button = ({children, onClick}) => {
    return (
        <button className='button' onClick={onClick} type="submit">{children}</button>
    );
}

export default Button;
