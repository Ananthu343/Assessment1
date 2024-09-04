import React, { useEffect, useState } from 'react'
import menu from '../utils/menuData'
import { StateContext } from '../context/mainContext'

const NavigationBar = () => {
    const [navigations, setNavigations] = useState([])
    const { inView, setInView, user } = StateContext()

    useEffect(() => {
        const list = ["Dashboard", "Assignments", "Performance"]
        let filtered = menu.filter(item => {
            if (list.indexOf(item.name) != -1) {
                return item
            }
        })
        setNavigations(filtered)
    }, [])

    return (
        <ul className='flex lg:hidden fixed bottom-0 left-0 w-full p-3 pb-4 border-t'>
            {
                navigations?.map((item, index) => {
                    return <li key={index} onClick={() => setInView(item.name)} className='w-full flex flex-col gap-1  items-center hover:cursor-pointer hover:bg-gray-100'>
                        <div className={`w-[34px] h-[34px] rounded-full flex justify-center items-center`}>
                            <svg width="18" height="18" viewBox="0 0 16 16" fill={inView == item.name ? "#0467FC" : "none"} stroke={inView == item.name ? "bg-[#0467FC]" : "black"} xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d={item.icon} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className={`text-xs ${inView == item.name ? "text-[#0467FC]" : "text-[#404040]"}`}>{item.name}</h3>
                    </li>
                })
            }
            <li className='w-full flex flex-col gap-1  items-center hover:cursor-pointer hover:bg-gray-100'>
                        <div className={`w-[34px] h-[34px] rounded-full flex justify-center items-center`}>
                            <img className='w-[24px] h-[24px] rounded-full' src={user?.profile_url} alt="" />
                        </div>
                        <h3 className={`text-xs text-[#404040]`}>Profile</h3>
            </li>
        </ul>
    )
}

export default NavigationBar
