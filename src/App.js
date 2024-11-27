import React,{useState,useEffect} from 'react';

function App() {
  const[time,setTime]=useState(0);
  const[isRunning,setIsRunning]=useState(false);


  useEffect(()=>{
    let timer;

    if (isRunning){
      timer=setInterval(()=>{
        setTime((prevStart)=>prevStart+10)

      },10)
    }
return ()=>clearInterval(timer)
  },[isRunning])


  const handleStartPause=()=>{
    setIsRunning((prev)=>!prev)

    
  }

  const handleRestart=()=>{
    setIsRunning(false)
    setTime(0);
  }

  const formatTime=()=>{
    const millisecond=Math.floor((time % 1000)/10);
    const second=Math.floor((time /1000)%60);
    const minutes=Math.floor((time /60000)%60);

    return `${String(minutes).padStart(2,'0')}  :${String(second).padStart(2,'0')} :${String(millisecond).padStart(2,'0')}`

  }


  return (
    <div className='grid justify-center items-center h-screen'>
      <div className='bg-slate-300 p-3 rounded-lg '>
        <h1 className='text-center py-3 font-bold text-2xl text-white bg-blue-700 rounded-lg'>Stop Watch</h1>
        <div className='py-3'>
          <h5 className='text-xl font-medium text-center py-3'>{formatTime()}</h5>
          <button className='bg-green-700 text-white p-3 rounded-lg m-3 hover:bg-green-400 hover:text-black' onClick={handleStartPause}>{isRunning ? "Pause":"Start"}</button>
          <button className='bg-red-700 text-white p-3 rounded-lg m-3 hover:bg-red-400 hover:text-black' onClick={handleRestart}>Restart</button>
        </div>

      </div>
      
    </div>
  )
}

export default App
