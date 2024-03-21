// import React, { useRef, useState } from 'react'

// const Stopwatch = () => {

//     const[startTime,setStartTime] = useState(null)
//     const[now,setNow] = useState(null)
//     const intervalRef = useRef(null)

//     const start = () => {
//         setStartTime(Date.now())
//         setNow(Date.now())

//         clearInterval(intervalRef.current)
//         intervalRef
//     }

//     return (
//         <>
//             <h1></h1>
//             <button onClick= {start}>Start</button>
//             <button onClick= {stop}>Stop</button>
//         </>
//     )
// }

// export default Stopwatch
