import React,{ useState, useEffect } from "react";
import axios from 'axios';


const Images = (props)=>{
    const [state, setState] = useState(true);
    useEffect( () => { console.log('This is my State:', state)});
    axios.get('https://api.nasa.gov/planetary/apod')
  .then(res=>{
    console.log(res)
  })

    return <div>

    </div>
}

export default Images

