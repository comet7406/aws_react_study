import React from 'react';

function Input({ type, isDisabled, isRequired, isAutoFocus, placeholder, value, onChange, onKeyUp }) {
    return (
        <>
            <input type={type} />
        </>
    );
}

Input.defaultProps = {
    
}

export default Input;