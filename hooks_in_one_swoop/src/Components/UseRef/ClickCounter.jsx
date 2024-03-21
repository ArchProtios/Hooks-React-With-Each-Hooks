import React, { useRef } from 'react'

const ClickCounter = () => {

    const count = useRef(0)

    const click = () => {
        count.current = count.current + 1;
        alert(`you have clicked a total of ${count.current}`)
    }

    return (
        <>
            <button onClick={click}>Click Here</button>
        </>
    )
}

export default ClickCounter
