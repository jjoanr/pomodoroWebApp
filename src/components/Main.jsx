import React from 'react'
import Timer from './Timer'

const Main = () => {
  return (
    <div id='main'>     
        <h1 className='text-center text-3xl font-sans font-bold text-black'>Pomodoro Timer</h1>   
        <div className='w-full h-full absolute top-0 left-0 bg-white/50 flex justify-center items-center'>
            <div className='flex justify-center'>
                <Timer/>
            </div>
        </div>   
    </div>
  )
}

export default Main