import React from 'react'
import Sidebar from '../components/Sidebar'
import NavigationBar from '../components/NavigationBar'

const Home = () => {
  return (
    <div className='w-screen h-screen flex'>
        <NavigationBar/>
        <Sidebar/>
    </div>
  )
}

export default Home
