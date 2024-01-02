import React from 'react'
import { VscDebugRestart } from "react-icons/vsc";

function RestartButton( {onClick} ) {
  return (
    <button onClick={onClick}>
        <VscDebugRestart size={50} color='gray' className='cursor-pointer hover:scale-110 ease-in duration-200'/>
    </button>
  )
}

export default RestartButton