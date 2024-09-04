import React from 'react'

const Pagination = () => {
    return (
        <ul className='flex gap-2'>
            <li className='h-[36px] w-[77px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'>
                <a className='flex items-center gap-2 text-[#313131] text-[14px]' href="">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.23252 0.184136C5.4622 0.422999 5.45475 0.802824 5.21589 1.0325L2.06569 4L5.21589 6.9675C5.45475 7.19718 5.4622 7.577 5.23252 7.81587C5.00285 8.05473 4.62302 8.06218 4.38416 7.8325L0.784158 4.4325C0.66651 4.31938 0.600023 4.16321 0.600023 4C0.600023 3.83679 0.66651 3.68062 0.784158 3.5675L4.38416 0.167501C4.62302 -0.0621752 5.00285 -0.0547276 5.23252 0.184136Z" fill="#626262" />
                    </svg>
                    Back
                </a>
            </li>
            <li className='h-[36px] w-[33px] flex justify-center items-center rounded text-white bg-blue-500 border border-[#E9E9E9]'><a href="">1</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">2</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">3</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">4</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">5</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">...</a></li>
            <li className='h-[36px] w-[33px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'><a href="">25</a></li>
            <li className='h-[36px] w-[77px] bg-white flex justify-center items-center rounded border border-[#E9E9E9]'>
                <a className='flex items-center gap-2' href="">
                    Next
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.767477 7.81586C0.5378 7.577 0.545248 7.19718 0.784111 6.9675L3.93431 4L0.784111 1.0325C0.545248 0.802823 0.5378 0.422997 0.767476 0.184134C0.997152 -0.0547285 1.37698 -0.0621767 1.61584 0.167499L5.21584 3.5675C5.33349 3.68062 5.39998 3.83679 5.39998 4C5.39998 4.16321 5.33349 4.31938 5.21584 4.4325L1.61584 7.8325C1.37698 8.06218 0.997153 8.05473 0.767477 7.81586Z" fill="#626262" />
                    </svg>
                </a>
            </li>
        </ul>
    )
}

export default Pagination
