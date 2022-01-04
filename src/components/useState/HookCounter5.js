import React,{useState} from 'react'

// basic Todolist

function HookCounter5() {

    const [name,setName] = useState("");
    const [item,setItem] = useState([]);

    const inputText = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const addName = () =>{
        setItem([...item,{
                id:item.length+1,
                name:name
            }])
    }

    return (
        <div className='div'>
            <input type="text" value={name} onChange={inputText}/>
            <button onClick={addName}>Add input</button>
            <p>
                {item.map(item=>(
                    <p key={item.id}>{item.id}. {item.name}</p>
                ))}
            </p>
        </div>
    )
}

export default HookCounter5
