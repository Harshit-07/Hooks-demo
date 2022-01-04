import React,{useState,useEffect} from 'react'
import axios from 'axios';

function HookFetchData() {

    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    const [idFromButton,setIdFromButton] = useState(1);

    const setInput = (e) => {
        setId(e.target.value);
    }
    const onClick = () =>{
        setIdFromButton(id);
    } 

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res => {
            console.log(res);
            setPost(res.data);
        })
        .catch(err =>{
            console.log(err);
        })  
    },[idFromButton])

    return (
        <div>
            <input type="text" value={id} onChange={setInput}/>
            <p>{post.title}</p>
            <button onClick={onClick}>Click me</button>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }   
            </ul> */}
        </div>
    )

}

export default HookFetchData
