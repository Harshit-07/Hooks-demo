import React, { useState } from 'react';

//using prevCount is more safer method to do increament and decreament

function HookCounter2(){

    const intialCount = 0;
    const [count,setCount] = useState(intialCount);

    const increaseFive = () => {
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }

    return(
        <div>
            Count : {count}
            <button onClick={()=>setCount(prevCount => prevCount+1)}>Increase Count</button>
            <button onClick={()=>setCount(prevCount => prevCount-1)}>Decrease Count</button>
            <button onClick={()=>setCount(prevCount => intialCount)}>Reset Count</button>
            <button onClick={increaseFive}>Increase Count 5</button>
        </div>
    )
}

export default HookCounter2;