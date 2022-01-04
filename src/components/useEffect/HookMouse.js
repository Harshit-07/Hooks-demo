import React,{useState,useEffect} from 'react'

function HookMouse() {

    const [X,setX] = useState(0);
    const [Y,setY] = useState(0);

    const logMousePosition = (e) =>{
        console.log('mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    // will pass an empty array as an argument in order to render it only once
    // window.removeEventListener helps in cleanup eventListener eg.cancelling subscriptions,timers,etc.
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
        
        return () => {
            console.log('Component unmounted');
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])

    return (    
        <div>
            Hooks X - {X} Y - {Y}
        </div>
    )
}

export default HookMouse
