import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import LowerFoot from './components/LowerFoot'



export default function Layout() {
    
        return (
            <div>
                <Header/>
                <Outlet/>
                <LowerFoot/>

            </div>
          )

    }
  
