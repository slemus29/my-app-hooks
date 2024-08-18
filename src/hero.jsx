import React, { useEffect, useState } from 'react';

function Hero() {
    const [counter, setCounter] = useState(0);

    useEffect(()=> setCounter(counter + 2) , [])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default Hero;