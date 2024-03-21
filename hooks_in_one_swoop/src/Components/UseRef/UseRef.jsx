import React, { useEffect, useState, useRef } from 'react'

const UseRef = () => {

    const[inp,setInp] = useState('')
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1;
    })

    const submit = () => {
        const val = document.getElementById("input").value
        setInp(val)
    }

    return (
        <>
            <div>
                <label htmlFor="input">Write your name here :- </label><br />
                <input type="text" id='input' />
                <button type='submit' onClick= {submit}>Submit</button>
                <p>Name :- {inp}</p>
                <p>Number of Renders :- {count.current}</p>
            </div>
        </>
    )
}

export default UseRef
