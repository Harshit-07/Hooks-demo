import React,{useState} from 'react'

function HookCounter4() {

    const [item,setItem] = useState([]);
    const addItem = () =>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random() *10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {item.map(item => (
                    <li key={item.id}>Value: {item.value}  ID: {item.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter4
 