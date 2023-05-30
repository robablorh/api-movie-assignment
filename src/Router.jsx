import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Communities from "./paths/Communities"
import Home from "./paths/Home"
import Discoveries from "./paths/Discoveries"
import ComingSoon from "./paths/ComingSoon"
import Friends from "./paths/Friends"
import Parties from "./paths/Parties"
import Movies from "./paths/Movies"
import Media from "./paths/Media"
import Settings from "./paths/Settings"
import TvSeries from "./paths/TvSeries"
import Animations from "./paths/Animations"
import LogOut from "./paths/LogOut"


const Router = () => {
  return (
   
        <Routes>
            <Route path='/'            element={<Home/>}/>
            <Route path='/communities'   element= {<Communities/>}/>
            <Route path='/discoveries' element={<Discoveries/>}/>
            <Route path='/comingsoon'  element={<ComingSoon/>}/>
            <Route path='/friends'     element={<Friends/>}/>
            <Route path='/parties'     element={<Parties/>}/>
            <Route path='/media'       element={<Media/>}/>
            <Route path='settings'      element={<Settings/>} />
            <Route path='/logout'      element={<LogOut/>}/>
            <Route Path='/tvseries'    element={<TvSeries/>}/>
            <Route path='/movies'      element= {<Movies/>}/>
            <Route path='/animations' element=  {<Animations/>}/>




        </Routes>
         
  
  )
}

export default Router
