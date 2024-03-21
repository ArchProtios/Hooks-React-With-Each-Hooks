import React, { createContext, useContext } from 'react'
import { UseContext1 } from '../Components/UseContext'

const UseContext = () => {

    const { AppColours } = useContext(UseContext1) 

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default UseContext
