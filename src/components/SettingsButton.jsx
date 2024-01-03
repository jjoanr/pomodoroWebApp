import React, { useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

function SettingsButton( {studyTime, breakTime, repetitions, playSounds, ambient, updateParameters, updateSound, updateAmbient}) {
  const [settings, setSettings] = useState(false)
  const [updatedStudyTime, setUpdatedStudyTime] = useState(studyTime);
  const [updatedBreakTime, setUpdatedBreakTime] = useState(breakTime);
  const [updatedRepetitions, setUpdatedRepetitions] = useState(repetitions);

  const handleSettings = () => {
    setSettings(!settings);
  }

  const handleSave = () => {
    updateParameters(updatedStudyTime, updatedBreakTime, updatedRepetitions)
    setSettings(false)
  }
  
  const handleCancel = () => {
    setSettings(false)
  }

  return (
    <div className=''>
      {!settings && (
        <button onClick={handleSettings}>
          <IoSettingsSharp size={50} color='DimGrey' />
        </button>
      )}
      {
      settings ? (
        <div className="settings-panel bg-gray-200 p-4 rounded-lg mt-4">
          <p className='block text-gray-700 font-bold mb-2'>Study Time:
            <input
              min={5}
              max={60}
              type="number"
              value={updatedStudyTime}
              onChange={(e) => setUpdatedStudyTime(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-purple-500 w-20"
            />
            <label> minutes</label>
          </p>
          <p className='block text-gray-700 font-bold mb-2'>Break Time:
            <input
              min={5}
              max={60}
              type="number"
              value={updatedBreakTime}
              onChange={(e) => setUpdatedBreakTime(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-purple-500 w-20"
            />
            <label> minutes</label>
          </p>
          <p className='block text-gray-700 font-bold mb-2'>Repetitions:
            <input
              min={1}
              max={20}
              type="number"
              value={updatedRepetitions}
              onChange={(e) => setUpdatedRepetitions(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-purple-500 w-20"
            />
          </p>
          <p className='block text-gray-700 font-bold mb-2'>Sound:
            <input
              type="checkbox"
              checked={playSounds}
              onChange={updateSound}
              className="ml-4 size-5 p-1 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-purple-500 w-20"
            />
          </p>
          <p className='block text-gray-700 font-bold mb-2'>Ambient:
            <select className="ml-7 p-1 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-purple-500 w-20"
                    onChange={updateAmbient}
                    value={ambient}
            >
              <option value="none">None</option>
              <option value="rain">Rain</option>
              <option value="fireplace">Fireplace</option>
              <option value="river">River</option>
              <option value="heater">Heater</option>
            </select>
          </p>
          <div className='mt-2 text-center'>
            <label className='text-xs'>*Saving the values will reset the timer.</label>
          </div>
          <div className="mt-4 flex justify-center">
            <button onClick={handleCancel} className="mr-2 bg-red-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      ) : null
      }
    </div>
  );
}

export default SettingsButton;
