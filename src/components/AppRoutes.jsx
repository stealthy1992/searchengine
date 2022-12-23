import React from 'react'
import {  Routes ,Route, Navigate } from 'react-router-dom'
import Results from './Results'
import SearchBox from './SearchBox'

const AppRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        
          {["/searchbox"].map(path => (
            <Route 
              key="Search"
              path={path}
              element={<SearchBox />}
            />
          ))}
        
          {["/image", "/news" , "/video", "/search"].map(path => (
            <Route 
              key="Results"
              path={path}
              element={<Results />}
            />
          ))}
            
      </Routes>
    </div>
  )
}

export default AppRoutes
