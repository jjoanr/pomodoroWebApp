import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Sidenav from './components/Sidenav'
import Main from './components/Main'

function App() {
  return (
      <div>
        <Sidenav/>
        <Main/>
      </div>
  )
}

export default App
