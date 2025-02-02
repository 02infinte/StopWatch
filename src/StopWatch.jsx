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

  },[isRunning])
  const start=()=>{

  }
  const formatTime =()=>{
     return `00:00:00`
  }
  return (
    <div>
      <h1>{formatTime()}</h1>
      <button></button>
    </div>
  );
};

export default StopWatch;