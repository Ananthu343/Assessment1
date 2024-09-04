import React from 'react'
import Button from './Button'
import { StateContext } from '../context/mainContext'
import getFormattedDate from '../utils/formatedDate'
import Pagination from './Pagination'
import Assignments from './Assignments'
import MobileviewDashboard from './MobileviewDashboard'

const Dashboard = () => {
    const { filteredClass, filter, assignments } = StateContext()

    const handleFilter = (e) => {
        if (e.target.checked) {
            filter(true)
        } else {
            filter(false)
        }
    }

    return (
        <div className='w-full h-auto flex lg:bg-[#F6F6F7] p-3 gap-3'>
            <div className='w-full lg:w-[50%] h-full flex-col'>
                <div className='w-full xs:h-full lg:min-h-[85%] bg-white rounded-lg flex flex-col p-3'>
                    <div className='w-full flex justify-between'>
                        <div className='flex flex-col'>
                            <h3 className='font-[600] text-[18px]'>Upcoming classes</h3>
                            <p className='text-[#5A5C60] text-xs'>For next 7 days</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[14px] font-[500]'>Booked</p>
                            <input onChange={handleFilter} className='w-[20px] h-[20px] cursor-pointer' type="checkbox" />
                        </div>
                    </div>
                    {/* mobile view */}
                    <div className='lg:hidden w-full h-auto py-5 gap-3 flex flex-col'>
                        {
                            filteredClass?.map((item, index) => {
                                return <MobileviewDashboard key={index} item={item} index={index} />
                            })
                        }
                    </div>
                    {/* desktop view */}
                    <table className='hidden lg:table visible lg:table-visible mt-3 w-full'>
                        <thead className='text-[12px] font-medium text-[##5F5F61] bg-[#F6F6F6] h-[40px]'>
                            <tr>
                                <th className='p-3 text-left'>Class name</th>
                                <th className='p-3 text-left'>Instructor</th>
                                <th className='p-3 text-left'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClass?.map((item, index) => {
                                return (
                                    <tr key={index} className='text-[14px] border-b'>
                                        <td>
                                            <div className='p-3 items-center flex gap-2'>
                                                <p className='text-[#A1A0A3]'>{index + 1}</p>
                                                <div className='flex flex-col pl-2'>
                                                    <p className='font-semibold'>{item?.name}</p>
                                                    <div className="text-[#5F5F61] font-medium flex items-center gap-1">
                                                        {item?.status === "join" && (
                                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                                        )}
                                                        {item?.status === "join" && <span className="text-red-500">Live</span>}
                                                        {(item?.status === "join") && <span> (0.54)</span>}
                                                        {(item?.status !== "join") && <span> {getFormattedDate(item?.date)}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='p-3 items-center flex gap-2'>
                                                <div className='w-[36px] h-[36px] rounded-full object-cover overflow-hidden'>
                                                    <img src={item?.instructor_img} alt="profile_img" />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold'>{item?.instructor_name}</p>
                                                    <p className='text-[#5F5F61]'>{item?.details ?? "Additional details"}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-3 items-center'>
                                            <Button status={item.status} date={item.date} index={index} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* pagination */}
                <div className='hidden w-full py-3 lg:flex justify-between'>
                    <Pagination />
                    <div className='flex gap-2 items-center'>
                        <p className='text-[14px]'>Results per page</p>
                        <select className='h-[36px] w-[64px] bg-white flex justify-center items-center rounded px-2 py-2 border border-[#E9E9E9]'>
                            <option defaultValue={10}>10</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <p className='hidden lg:flex'>1-10 to 100</p>
            </div>
            <div className='hidden lg:flex flex-col lg:w-[50%] h-[85%] p-3 bg-white rounded-lg'>
                {/* Assignments */}
                <div className='w-full flex'>
                    <h2 className='font-semibold text-[18px]'>Assignments <span className='text-[#737475]'>({assignments?.length})</span></h2>
                </div>
                <Assignments />
            </div>

        </div>
    )
}

export default Dashboard
