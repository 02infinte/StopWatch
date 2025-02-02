import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const StopWatch = () => {
  const[isRunning,setIsRunning]=useState(false);
  const[elapsedTime,setElapsedTime]=useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  useEffect(()=>{
    if(isRunning){
     intervalIdRef.current= setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current);
      },10)
    }
    return ()=>{
      clearInterval(intervalIdRef.current);
    }
  },[isRunning])
  const start=()=>{
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  const stop=()=>{
    setIsRunning(false);
    setElapsedTime(0);
  }
  const formatTime =()=>{
    let hours = Math.floor(elapsedTime/(1000 *60 * 60 ));
    let minutes = Math.floor(elapsedTime/(1000 *60)% 60);
    let seconds = Math.floor(elapsedTime/(1000)% 60);
    let milliseconds = Math.floor(elapsedTime%(1000)/ 10);  //divided by 10 to display only the first two digits
     return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  }
  return (
    <div>
      <h1>{formatTime()}</h1>
      <button onClick={isRunning ?  stop : start} >{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default StopWatch;