import React,{ useState, useEffect } from "react";
import "./App.css";
import Header from './Header'
import Display from './Display'
import axios from 'axios';
import {Var} from './Style'

function App() {

  //creating states from the objects given in NASA website
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [media, setMedia] = useState('');
  const [version, setVersion] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState ('');

    useEffect( () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo ')
      .then((res)=>{
        console.log(res.data);
        const results = res.data;
        // console.log(results)
        setDate (results.date);
        setExplanation(results.explanation);
        setMedia (results.media_type);
        setVersion (results.service_version);
        setTitle (results.title);
        setUrl (results.url);})
      },[])
      return (
        <div className="App">
          <Var><p>Hello</p></Var>
          <h1>{title}</h1>
          {media === 'video' ? <iframe src = {url}></iframe> : <img src ={url}></img>}
          <p>{date}</p>
          <p>{explanation}</p>
          {/* <p>{version}</p> */}
        </div>)
}

export default App;
