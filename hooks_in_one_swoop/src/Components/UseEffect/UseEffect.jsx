import React, { useState , useEffect } from 'react'

const UseEffect = () => {

    const[count,setCount] = useState(0)

    useEffect(() => {
        window.title = `Number of clicks: ${count}`
    },[count])

    return (
        <>
            <h1> Number of clicks are :- {count} </h1>
            <button onClick= {() => {setCount(count+1)}}>CLick Here</button>
        </>
    )
}

export default UseEffect

