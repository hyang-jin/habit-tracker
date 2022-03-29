import React, { useState, useCallback, useEffect, useRef } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    useEffect(()=>{
        console.log("useEffect!!");
    },[count])

    const handleIncreament = useCallback(()=>{
        setCount(count +1);
    });

    return (
        <div>
            <li className="habit">
                <span ref={spanRef} className="habit-name">Reading</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase"
                    onClick={handleIncreament}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                
            </li>
        </div>
    );
};

export default SimpleHabit;

