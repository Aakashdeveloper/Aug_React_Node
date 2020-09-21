import React,{useState,useEffect} from 'react';
import DisplayCity from './DisplayComponent';

const url = "https://developerfunnel.herokuapp.com/location";

function Hooks(){
    const [title] = useState('NareshIT');
    const [count,setCount] = useState(0);
    const [counter,setCounter] = useState(0);
    const [city,setCity] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) =>  res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <div>
            <center>
                <h2>{title}</h2>
                <h2>{count}</h2>
                <button onClick={()=>{setCount(count+1)}}>Counter</button>
                <h2>{counter}</h2>
                <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
                <DisplayCity mycity={city}/>
            </center>
        </div>
    )
}


export default Hooks;