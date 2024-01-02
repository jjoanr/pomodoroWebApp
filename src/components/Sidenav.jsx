import React, {useState, useEffect, useRef} from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import { CiAlarmOn } from "react-icons/ci";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom"

function Sidenav(props) {
    const [nav, setNav] = useState(false)
    const navRef = useRef(null);
    const handleNav = () => {
        setNav(!nav)
    }
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setNav(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div>
            <AiOutlineMenu 
                onClick={handleNav}
                size={30}
                className='absolute top-4 left-4 z-[99] cursor-pointer hover:scale-110 ease-in duration-200'
            />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20' onClick={stopPropagation}>
                        <Link 
                            to="/" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                            onClick={() => setNav(false)}
                        >
                            <CiAlarmOn size={20}/>
                            <span className='pl-4'>Pomodoro Timer</span>
                        </Link>
                        <Link 
                            to="/about" 
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                            onClick={() => setNav(false)}
                        >
                            <AiFillInfoCircle size={20}/>
                            <span className='pl-4'>About</span>
                        </Link>
                    </div>
                )
                : (
                    <div></div>
                )

            }
        </div>
    )
}

export default Sidenav