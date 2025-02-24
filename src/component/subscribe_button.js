import {useState} from 'react';


export const SubscribeButton = ()=>{
    const [message,setMessage] =useState('welcome');
    return <div>
        <h2>{message}</h2>
        <button onClick={()=>{
            setMessage('thank you for Subscribe')
        }}>Subscribe Button</button>
    </div>
}