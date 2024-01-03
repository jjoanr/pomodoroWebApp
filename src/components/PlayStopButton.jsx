import React from 'react';
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";

function PlayStopButton({ onClick, isPlaying }) {
  return (
    <button onClick={onClick}>
      {isPlaying ? (
        <FaPause size={50} color='Gray' className='cursor-pointer hover:scale-110 ease-in duration-200'/>
      ) : (
        <IoPlay size={50} color='Gray' className='cursor-pointer hover:scale-110 ease-in duration-200'/>
      )}
    </button>
  );
}

export default PlayStopButton;