import React, {useState} from "react";

const Counter = () => {
    const [counter, setCount] = useState(0)
    
    let increment = () => {
    setCount(counter + 1) 
    }

    let decrement = () => {
    setCount(counter - 1) 
    }

    return (    
        <div className="Counter">
            <h1 className="CounterValue">{counter}</h1>
            <button className="MoreButton" onClick={increment}>More</button>
            <button className="LessButton" onClick={decrement}>Less</button>
        </div>
    )
}

export default Counter;