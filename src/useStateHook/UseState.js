import React, { useState } from 'react'

function UseState() {
    //khai báo state với initial state là hello world
    const [state, setState] = useState('hello world')

    // set state khi click
    const clickUpdate = () => {
        setState("hello")
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={clickUpdate}>Click me!</button>
        </div>
    )
}

export default UseState
