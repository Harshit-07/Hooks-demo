import React,{useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {

    const[toggle,setToggle] = useState(true);
    return (
        <div>
            <button onClick={()=>setToggle(false)}>Toggle the display</button>
            {toggle && <HookMouse />}
        </div>
    )
}

export default MouseContainer
