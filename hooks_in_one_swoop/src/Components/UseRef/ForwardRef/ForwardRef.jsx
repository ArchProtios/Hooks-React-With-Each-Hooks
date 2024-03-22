import React, { useRef } from 'react'
import Child from './Child'

const ForwardRef = () => {
    
    const input = useRef(null)
    const updateBtn = () => {
        input.current.value = '1000'
    }

    return (
        <>
            <div className="App">
                <h1>forwardRef in react :- </h1>
                <Child ref={input} />
                <button onClick= {updateBtn}>Update</button>
            </div>
        </>
    )
}

export default ForwardRef
