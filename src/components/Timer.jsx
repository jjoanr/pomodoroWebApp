import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PlayStopButton from './PlayStopButton'
import SettingsButton from './SettingsButton'
import RestartButton from './RestartButton'

function Timer() {
    const [studyTime, setStudyTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [repetitions, setRepetitions] = useState(4)
    const [timeRemaining, setTimeRemaining] = useState(studyTime * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [currentPhase, setCurrentPhase] = useState('study') // study-break
    const [completedRepetitions, setCompletedRepetitions] = useState(0)
    const [showCongratulations, setShowCongratulations] = useState(false)
    const [playSounds, setPlaySounds] = useState(true) 

    const updateParameters = (study, breakDuration, rep) => {
        setStudyTime(study)
        setBreakTime(breakDuration)
        setRepetitions(rep)
    }

    const updateSound = (e) => {
        setPlaySounds(e.target.checked);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    const handleButtonClick = () => {
        if (isRunning) {
          setIsRunning(false)
        } else {
          setIsRunning(true)
        }
    }

    const handleResetClick = () => {
        setCurrentPhase('study')
        setIsRunning(false)
        setCompletedRepetitions(0)
        setTimeRemaining(studyTime * 60)
    }

    const handleExit = () => {
        setShowCongratulations(false)
        setCurrentPhase('study')
        setCompletedRepetitions(0)
        setTimeRemaining(studyTime * 60)
    }
    
    useEffect(() => {
        setTimeRemaining(
            currentPhase === 'study' ? studyTime * 60 : breakTime * 60
        )
    }, [currentPhase, studyTime, breakTime]);

    useEffect(() => {
        let interval;
        if (isRunning) {
          interval = setInterval(() => {
            setTimeRemaining((prevTime) => {
              if (prevTime === 0) {
                if (currentPhase === 'study' && completedRepetitions < repetitions - 1) {
                    setCurrentPhase('break')
                    setTimeRemaining(breakTime * 60)
                    if(playSounds) {
                        let audio = new Audio('/end-study.mp3');
                        audio.play()
                    }
                } else if (currentPhase === 'break' && completedRepetitions < repetitions - 1) {
                    setCurrentPhase('study')
                    setTimeRemaining(studyTime * 60)
                    setCompletedRepetitions((prevRepetitions) => prevRepetitions + 1)
                    if(playSounds) {
                        let audio = new Audio('/end-break.mp3');
                        audio.play()
                    }
                } else {
                    setCurrentPhase('study')
                    setIsRunning(false)
                    setCompletedRepetitions(0)
                    setTimeRemaining(studyTime * 60)
                    setShowCongratulations(true)
                    if(playSounds) {
                        let audio = new Audio('/end-session.mp3');
                        audio.play()
                    }
                }
                return 0; // reset timeRemaining to 0 when the phase changes
              }
              return prevTime - 1
            })
          }, 1000)
        } else {
          clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning, studyTime, breakTime, repetitions, currentPhase, completedRepetitions])

    return (
        <div className='flex flex-col items-center'>
            <div className='mb-4'>
                <CircularProgressbar
                    className='sm:size-40 md:size-40 lg:size-30 2xl:mt-12'
                    value={
                        currentPhase === 'study'
                        ? ((studyTime * 60 - timeRemaining) / (studyTime * 60)) * 100
                        : ((breakTime * 60 - timeRemaining) / (breakTime * 60)) * 100
                    }
                    text={formatTime(timeRemaining)}
                    styles={{
                        path: {
                        stroke:
                            currentPhase === 'study'
                            ? 'rgba(0, 119, 204, 1)' // Blue color for study
                            : 'rgba(255, 0, 0, 1)', // Red color for break
                        },
                    }}
                />
            </div>

            <div className='flex justify-center mt-4'>
                <div className='flex items-center'>
                <PlayStopButton onClick={handleButtonClick} isPlaying={isRunning} className="text-xl px-4 py-2"/>  
                <RestartButton onClick={handleResetClick} className="text-xl px-4 py-2"/>              
                </div>
            </div>

            <div className='mt-12 cursor-pointer hover:scale-110 ease-in duration-200'>
                <SettingsButton
                    studyTime={studyTime}
                    breakTime={breakTime}
                    repetitions={repetitions}
                    playSounds={playSounds}
                    updateSound={updateSound}
                    updateParameters={updateParameters}
                />
            </div>
            {showCongratulations && (
                <div className='absolute inset-0 bg-white/80 flex items-center justify-center'>
                    <div className='bg-gray-200 p-4 rounded flex flex-col items-center'>
                        <p>Congratulations! You've completed your session.</p>
                        <button onClick={handleExit} className='mt-4 bg-red-500 text-white px-4 py-2 rounded'>
                        Exit
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Timer