import React from 'react'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import GPSsumary from './components/GPSsumary'
import Signup from './components/Signup'
import GpsDetailedpage from './components/GpsDetailedpage'
function App() {
  return (
    <>
    <div>
      <Navbar/>
    <div className='app d-flex flex-column justify-content-center'>
      <div className='border shadow'>
      <Routes>
          <Route path='/' element ={<Homepage/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<Signup/>}/>
          <Route path='/gpssummary' element ={<GPSsumary/>}/>
          <Route path='/gpsdetailed' element ={<GpsDetailedpage/>}/>

        </Routes>
      </div>
    </div>
    </div>
    </>
  )
}

export default App