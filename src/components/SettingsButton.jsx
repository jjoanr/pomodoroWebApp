import React, { useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

function SettingsButton( {studyTime, breakTime, repetitions, updateParameters}) {
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
          <IoSettingsSharp size={70} color='DimGrey' />
        </button>
      )}
      {
      settings ? (
        <div className="settings-panel bg-gray-200 p-4 rounded-lg mt-4">
          <p>Study Time:
            <input
              type="number"
              value={updatedStudyTime}
              onChange={(e) => setUpdatedStudyTime(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded"
            />
            <label> minutes</label>
          </p>
          <p>Break Time:
            <input
              type="number"
              value={updatedBreakTime}
              onChange={(e) => setUpdatedBreakTime(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded"
            />
            <label> minutes</label>
          </p>
          <p>Repetitions:
            <input
              type="number"
              value={updatedRepetitions}
              onChange={(e) => setUpdatedRepetitions(e.target.value)}
              className="ml-2 p-1 border border-gray-300 rounded"
            />
          </p>
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
