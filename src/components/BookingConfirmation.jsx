import React from 'react'

const BookingConfirmation = ({ handleBooking, handleModal }) => {
    return (
        <div className='fixed w-screen h-screen bg-black/60 top-0 left-0 flex justify-center items-center'>
            <div className='w-[332px] h-[221px] lg:w-[500px] lg:h-[207px] bg-white p-3 flex flex-col rounded-lg justify-between'>
                <div className='flex flex-col gap-3 border-b pb-10'>
                    <h2 className='text-black text-[18px] font-medium'>Are you sure?</h2>
                    <p className='text-[#737475] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?</p>
                </div>
                <div className='flex w-full p-2 justify-end gap-3'>
                    <button onClick={handleModal()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-[#EEEEEE] rounded shadow">
                        Close
                    </button>
                    <button onClick={handleBooking()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingConfirmation
