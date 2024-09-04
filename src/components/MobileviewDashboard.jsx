import React from 'react'
import Button from './Button'
import getFormattedDate from '../utils/formatedDate'

const MobileviewDashboard = ({ item, index }) => {
    return (
        <div className='w-full rounded-lg border p-4 flex flex-col gap-4'>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-[19px]'>{item?.name}</p>
                    <div className='flex gap-2 items-center'>
                        <div className='w-[30px] h-[30px] rounded-full object-cover overflow-hidden'>
                            <img src={item?.instructor_img} alt="profile_img" />
                        </div>
                        <p className='font-medium text-[13px]'> by {item?.instructor_name}</p>
                    </div>
                </div>
                <div className='flex gap-2 text-[12px] text-[#5F5F61] h-[30px]'>
                    {
                        item?.status === "join" && (
                            <div className='flex gap-2 items-center'>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-red-500">Live</span>
                                <span>(0.54)</span>
                            </div>
                        )
                    }
                    {(item?.status !== "join") && <span> {getFormattedDate(item?.date)}</span>}
                </div>
            </div>
            <Button status={item.status} date={item.date} index={index} />
        </div>
    )
}

export default MobileviewDashboard
