import React from 'react'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Routes,Route } from 'react-router-dom'
import Movies from './components/Movies'
import TvShow from './components/TvShow'

export default function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='/:id' element={<TvShow/>}/>
    </Routes>
    </>
  )
}
