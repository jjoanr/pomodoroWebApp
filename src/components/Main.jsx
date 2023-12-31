import React from 'react'
import Timer from './Timer'

const Main = () => {
  return (
    <div id='main'>        
        <img 
            className = "w-full h-screen object-cover scale-x-[-1]"
            src={"wallpaper.jpg"}
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 flex justify-center items-center'>
            <div className='flex justify-center'>
                <Timer/>
            </div>
        </div>   
    </div>
  )
}

export default Main