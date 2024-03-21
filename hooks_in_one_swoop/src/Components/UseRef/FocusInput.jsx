import React, { useRef } from 'react';  

const FocusInput = () => {

    const focus = useRef(null);

    const submit = () => {
        const inputValue = focus.current.value;
        alert(`you have clicked ${inputValue} times ...`);
    }

    return (
        <>
            <label>what is your name :-</label>
            <br />
            <input type="text" ref={focus} /> 
            <button onClick={submit}>Click Here</button>
        </>
    )
}

export default FocusInput
