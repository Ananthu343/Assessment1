import React, { useEffect, useState } from 'react'
import { StateContext } from '../context/mainContext'

const NavItem = ({ item }) => {
    const { inView, setInView } = StateContext()
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (item?.name == inView) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [inView])

    const handleView = () => {
        if (item?.name != "Log out") {
            setInView(item.name)
        }
    }

    return (
        <li onClick={handleView} className='hidden w-full lg:flex gap-2 p-2 items-center hover:cursor-pointer hover:bg-gray-100'>
            <div className={`w-[34px] h-[34px] rounded-full flex justify-center items-center ${selected ? "bg-[#0467FC]" : "bg-[#EFEDEA]"}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill={selected ? "white" : "none"} stroke={selected ? "bg-[#0467FC]" : "black"} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={item.icon} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className={`text-sm text-[#404040] ${selected ? "font-semibold" : ""}`}>{item?.name}</h3>
        </li>
    )
}

export default NavItem
