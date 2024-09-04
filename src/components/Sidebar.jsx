import React from 'react'
import { StateContext } from '../context/mainContext'
import NavItem from './NavItem';
import menuData from '../utils/menuData';

const Sidebar = () => {
    const { user } = StateContext()
    
  return (
    <div className='hidden lg:flex flex-col h-auto min-h-full w-[220px] pl-3 pb-3 pt-3 border border-r'>
      <div className='w-full p-4 flex items-center gap-2 font-bold'>
        <div className='w-4 h-4 bg-gray-200'></div>
        <h2>Logo</h2>
      </div>
      <div className='flex flex-col p-3 mt-2'>
          <img className='w-[50px] h-[50px] rounded-full' src={user?.profile_url} alt="Profile" />
          <h2 className='font-semibold'>{user?.name ?? "no-user"}</h2>
          <p className='text-xs text-[#404040]'>{user?.level}</p>
      </div>
      <div className='w-full h-full border-t flex flex-col justify-between pt-3 pb-2'>
             <ul className='h-full flex flex-col'>
                {
                    menuData?.map((item,index) => {
                        return <NavItem key={index} item={item}/>
                    })
                }
             </ul>
             <NavItem item={{name:"Log out", icon: "M5.75 14.75H2.75C2.35218 14.75 1.97064 14.592 1.68934 14.3107C1.40804 14.0294 1.25 13.6478 1.25 13.25V2.75C1.25 2.35218 1.40804 1.97064 1.68934 1.68934C1.97064 1.40804 2.35218 1.25 2.75 1.25H5.75M11 11.75L14.75 8M14.75 8L11 4.25M14.75 8H5.75"}}/>
      </div>
      <div className='w-full p-3'>
          <p className='text-xs text-gray-500'>v.1.2</p>
      </div>
    </div>
  )
}

export default Sidebar




