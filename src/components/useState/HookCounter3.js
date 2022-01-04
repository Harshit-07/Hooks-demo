import React,{useState} from 'react'

function HookCounter3() {

    const [name,setName] = useState({firstname:'',lastname:''})

    return (
            <form>
                <input 
                    type="text"
                    value={name.firstname}
                    onChange={e=> setName({ ...name,firstname:e.target.value})}
                />
                <input 
                    type="text"
                    value={name.lastname}
                    onChange={e=> setName({...name,lastname:e.target.value})}
                />
                <h2>First name : {name.firstname}</h2>
                <h2>Last name : {name.lastname}</h2>
            </form>
    )}

export default HookCounter3
