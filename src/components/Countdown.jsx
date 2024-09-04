import React, { useState, useEffect } from 'react';

const Countdown = ({ targetTime }) => {
    const [countdown, setCountdown] = useState(calculateRemainingTime(targetTime));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(calculateRemainingTime(targetTime));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetTime]);

    const days = Math.floor(countdown.totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((countdown.totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countdown.totalSeconds % (60 * 60)) / 60);
    const seconds = countdown.totalSeconds % 60;

    let formattedTime = "";
    if (days) {
        formattedTime += `${days} days`
    } else {
        formattedTime += `${hours}:${minutes}:${seconds}`
    }

    if (days == hours == minutes == seconds == 0) {
        // We can call the api to start the class
    }

    return (
        <div className={`flex ${days ? "text-[#737475]" : "text-[#1469D3]"} gap-2 font-semibold`}>
            <p>{formattedTime}</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke={`${days ? "#737475" : "#1469D3"}`} d="M9.99996 4.99999V9.99999L13.3333 11.6667M18.3333 9.99999C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 9.99999C1.66663 5.39762 5.39759 1.66666 9.99996 1.66666C14.6023 1.66666 18.3333 5.39762 18.3333 9.99999Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

function calculateRemainingTime(targetTime) {
    const now = new Date();
    const targetDate = new Date(targetTime);
    const differenceInSeconds = Math.ceil((targetDate - now) / 1000);
    return {
        totalSeconds: differenceInSeconds,
        days: Math.floor(differenceInSeconds / (60 * 60 * 24)),
        hours: Math.floor((differenceInSeconds % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((differenceInSeconds % (60 * 60)) / 60),
        seconds: differenceInSeconds % 60
    };
}

export default Countdown;