import React, { useState } from 'react';

function HookCounter(){

    const [count,setCount] = useState(0);
    // const [name,setName] = useState("harshit");

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
            {/* <h2>
                <button onClick={() => setName("Gupta")}>Press</button>
                {name}
            </h2> */}
        </div>
    )
}

export default HookCounter;