import React, { useState } from 'react';

const Countdown = () => {
    const dueDate = new Date('07/08/2022 12:01 AM');
    const now = Date.now();
    const distance = dueDate - now;

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;
    const _week = _day * 7;

    const [countdown, setCountdown] = useState(`${Math.floor(distance / _week)} weeks`);

    if (distance < 0) {
        setCountdown(null);
    }

    const getCountdown = (e) => {
        const interval = e.target.innerText.toLowerCase();
        if (interval === 'weeks') {
            setCountdown(`${Math.floor(distance / _week)} weeks`);
        }
        if (interval === 'days') {
            setCountdown(`${Math.floor(distance / _day)} days`);
        }
        if (interval === 'hours') {
            setCountdown(`${Math.floor(distance / _hour)} hours`);
        }
    };

    return (
        <div id='countdown'>
            <h2 className='section-title'>Baby #2 Countdown</h2>
            {countdown ? 
                <p className='countdown-txt'>About <span className='text-secondary'>{countdown}</span> until Paige is due!</p>
             : 
             <p className='countdown-txt'>Paige is past due!</p>}
            <div className='btn-container'>
                <button className='countdown-btn' onClick={getCountdown}>Weeks</button>
                <button className='countdown-btn' onClick={getCountdown}>Days</button>
                <button className='countdown-btn' onClick={getCountdown}>Hours</button>
            </div>
        </div>
    );
};

export default Countdown;
