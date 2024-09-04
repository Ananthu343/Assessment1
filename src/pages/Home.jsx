import React from 'react'
import Sidebar from '../components/Sidebar'
import NavigationBar from '../components/NavigationBar'
import { StateContext } from '../context/mainContext'
import Dashboard from '../components/Dashboard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {inView} = StateContext()
    const navigate = useNavigate()

  return (
    <div className='w-screen h-screen flex'>
        <NavigationBar/>
        <Sidebar/>
        <div className='w-full flex flex-col'>
            <ul className='hidden w-full lg:flex text-[#5A5C60] text-xs pl-3'>
                <li onClick={()=>navigate('/')} className='p-4 hover:cursor-pointer'>Blogs</li>
                <li onClick={()=>navigate('/')} className='p-4 hover:cursor-pointer'>News</li>
                <li onClick={()=>navigate('/')} className='p-4 hover:cursor-pointer'>Help center</li>
                <li onClick={()=>navigate('/')} className='p-4 hover:cursor-pointer'>Customer service</li>
            </ul>
            <div className='w-full pl-6 p-3 flex justify-between border-b'>
                <h2 className='text-[21px] lg:text-[24px] font-[700] '>{inView}</h2>
                <svg className='lg:hidden' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12.5858 19.25C12.4247 19.5278 12.1933 19.7584 11.915 19.9187C11.6367 20.0791 11.3212 20.1634 11 20.1634C10.6788 20.1634 10.3633 20.0791 10.0849 19.9187C9.80663 19.7584 9.57532 19.5278 9.41416 19.25M16.5 7.33334C16.5 5.87465 15.9205 4.47571 14.8891 3.44426C13.8576 2.41281 12.4587 1.83334 11 1.83334C9.54131 1.83334 8.14236 2.41281 7.11091 3.44426C6.07946 4.47571 5.5 5.87465 5.5 7.33334C5.5 13.75 2.75 15.5833 2.75 15.5833H19.25C19.25 15.5833 16.5 13.75 16.5 7.33334Z" stroke="black" strokeOpacity="0.9" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {inView == "Dashboard" && <Dashboard/>}
        </div>
    </div>
  )
}

export default Home
