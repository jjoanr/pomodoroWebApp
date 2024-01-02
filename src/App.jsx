import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <div className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(/wallpaper.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <Router>
          <Sidenav className='z-[99]'/>
            <div className="p-3">
            <Routes>

              <Route 
                path="/"
                element={         
                <Main/>}>
              </Route>

              <Route 
                path="/about" 
                element={          
                <About/>}>        
              </Route>

            </Routes>
          </div>
        </Router>
      </div>
  )
}

export default App
