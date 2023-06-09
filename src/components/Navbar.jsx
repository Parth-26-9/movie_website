import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import '../styles/navbar.css'
import { useState,useContext } from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {MdSunny} from 'react-icons/md'
import {useGlobalContext} from './context'
// const Marvel = document.getElementById('Marvel').innerHTML
// const Dragon = document.getElementById('Dragon').innerHTML
// const Mirzapur = document.getElementById('Mirzapur').innerHTML
function Navbar() {
    const {query,setQuery}=useGlobalContext();
    const [handleIcons,SetHandleIcons]=useState(<BsMoonStarsFill/>)
  const [ModeHandler,setModeHandler]=useState({
    backgroundColor:"#00539CFF",
    color:"#EEA47FFF"
  })
  const handleClearSection = (e)=>{
    setQuery(e.target.value)
  }
  const handleMovieTopicClick = ()=>{
      setQuery("THOR")
  }
  const handLeMovieTopicClick = ()=>{
    setQuery("SPIDER-MAN")
  }
  const handlEMovieTopicClick = ()=>{
    setQuery("IRON MAN")
  }
  const handleDarkMode=()=>{
    if(ModeHandler.color==="#EEA47FFF")
      {
        setModeHandler({
          color:"white",
          backgroundColor:"#03001C"
        })
        SetHandleIcons(<MdSunny/>)
      }
      else{
        setModeHandler({
          backgroundColor:"#00539CFF",
          color:"#EEA47FFF"
        })
        SetHandleIcons(<BsMoonStarsFill/>)
      }
    }
  
    return (
      <>
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid" style={ModeHandler} >
          <img src="data:image/png;base64,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" alt="" id='logo' width="100rem" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 NavBarItemsFix">
              <li className="nav-item">
                <h4 className="nav-link active navbar-items" aria-current="page" onClick={handleMovieTopicClick}  id='Marvel' style={ModeHandler}>THOR</h4>
              </li>
              <li className="nav-item">
                <h4 className="nav-link active navbar-items"  onClick={handLeMovieTopicClick} id='Dragon' style={ModeHandler}>SPIDER-MAN</h4>
              </li>
              <li className="nav-item">
                <h4 className="nav-link active navbar-items" onClick={handlEMovieTopicClick} id='Mirzapur' style={ModeHandler}>IRON MAN</h4>
              </li>
              <li className="nav-item">
                <button className='DarkModeMoon' onClick={handleDarkMode} style={ModeHandler}>
                    {handleIcons}
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter Movie Name..." aria-label="Search" value={query} onChange={(e)=>setQuery(e.target.value)} />
              <button className="btn btn-outline-warning" type="button" onClick={handleClearSection} style={{fontSize:"2rem",fontWeight:"bolder"}}>Clear</button>
            </form>
          </div>
        </div>
      </nav>      
    </> 
  );
}


  export default Navbar
