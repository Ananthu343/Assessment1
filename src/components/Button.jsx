import React, { useState } from 'react'
import Countdown from './Countdown'
import { StateContext } from '../context/mainContext'
import BookingConfirmation from './BookingConfirmation'

const Button = ({ status, date, index }) => {
    const { bookNow } = StateContext()
    const [modal, setModal] = useState(false)

    const handleBooking = () => {
        bookNow(index)
        handleModal()
    }

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            {status == "scheduled" ? <button className={`flex font-semibold h-[40px] w-full lg:w-[110px] rounded justify-center items-center`}>
                {/* Date as prop in real world */}
                <Countdown targetTime={date} />
            </button>
                : status == "join" ?
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-3 lg:px-2 lg:py-2 border border-gray-400 rounded shadow flex gap-2 justify-center">
                        Join now
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 9.83333V14.8333C13.5 15.2754 13.3244 15.6993 13.0118 16.0118C12.6993 16.3244 12.2754 16.5 11.8333 16.5H2.66667C2.22464 16.5 1.80072 16.3244 1.48816 16.0118C1.17559 15.6993 1 15.2754 1 14.8333V5.66667C1 5.22464 1.17559 4.80072 1.48816 4.48816C1.80072 4.17559 2.22464 4 2.66667 4H7.66667M6.83333 10.6667L16 1.5M16 1.5H11M16 1.5V6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    : status == "book" ?
                        <button onClick={handleModal} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-[#FFFFFF] rounded shadow">
                            Book now
                        </button>
                        : <button className="disabled bg-[#EEEEEE] text-[#A1A0A3] font-semibold py-2 px-4  rounded shadow">
                            Book now
                        </button>}
            {modal && <BookingConfirmation handleBooking={() => handleBooking} handleModal={() => handleModal} />}
        </>
    )
}

export default Button
