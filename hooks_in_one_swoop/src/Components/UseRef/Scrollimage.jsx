import React, { useRef } from 'react'

const Scrollimage = () => {

    const a = useRef(null)

    const scroll = (index) => {
        const b = a.current
        const c = b.querySelectorAll('li>img')[index]
        c.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <>
            <nav>
                <button onClick={() => {scroll(0)}}>Julie</button>
                <button onClick={() => {scroll(1)}}>Jhon</button>
                <button onClick={() => {scroll(2)}}>Jenifer</button>
            </nav>
            <div>
                <ul ref={a}>
                    <li><img src="https://imgs.search.brave.com/kDxCKc2WgzrfLxE3-yvskZf9SpY0MoK1Ftq28K50omA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE3/NDY0MDMyL3Bob3Rv/L25ldy15b3JrLW55/LW1vZGVsLW5pbmEt/YWdkYWwtcG9zZXMt/Zm9yLWEtcGhvdG8t/b3V0c2lkZS1vZi10/aGUtemltbWVybWFu/bi1mYXNoaW9uLXNo/b3ctaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWhRekk1/NjhvZFJMM29SZXNW/NzVUV0xYTWtjVjh1/c1pfUGhrRHIzc0Zv/b2M9" /></li>
                    <li><img src="https://imgs.search.brave.com/KT-G28FrHujljP_NIpfHmCGdYoKBlO3rKWAUFN4VprI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MjgyMjg4L3Bob3Rv/L25ldy15b3JrLW55/LXR5LWh1bnRlci12/aXNpdHMtdGhlLXBh/cHlydXMtY2FmJUMz/JUE5LWR1cmluZy1p/bWctbnlmdy10aGUt/c2hvd3MtYXQtc3By/aW5nLXN0dWRpb3Mt/b24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWotQnlYN0J5/cVNuUFVkejJ2MVd2/TU9VbFNoSnZmaldU/TVdFdWVJNWJPaVE9" /></li>
                    <li><img src="https://imgs.search.brave.com/e7XvO1MB_b5XiJfNdAZSUuW-Fx7yPqgr1wC7eyGibXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE3/NDYzOTEyL3Bob3Rv/L25ldy15b3JrLW55/LW9saXZpYS1wYWxl/cm1vLXBvc2VzLWZv/ci1hLXBob3RvLW91/dHNpZGUtb2YtdGhl/LXppbW1lcm1hbm4t/ZmFzaGlvbi1zaG93/LWluLWdhbGxlcnku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTBzSDRZejdCOFZY/X0ZmTm1ZMGNJSlJV/eUxkWkkxRnE5d3Jo/Q01XdU1fdjg9" /></li>
                </ul>
            </div>
        </>
    )
}

export default Scrollimage
