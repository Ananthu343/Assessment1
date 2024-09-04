import React from 'react'
import { StateContext } from '../context/mainContext'

const Assignments = () => {
    const { assignments } = StateContext()
    return (
        <div className='w-full flex flex-col gap-2 py-3'>
            {
                assignments?.map((item, index) => {
                    return (
                        <div key={index} className='w=full p-3 flex flex-col rounded-md border'>
                            <h3 className='text-[14px] font-medium'>{item?.title}</h3>
                            <p className='text-[13px] text-[#737475]'>Deadline - {item?.deadline}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Assignments
