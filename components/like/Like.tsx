'use client';
import React, {useState} from 'react';
import {FaRegHeart} from "react-icons/fa";


export const Like: React.FC = () => {
    const [isActive, setIsActive] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FaRegHeart
                size={40}
                style={{
                    borderColor: '#black',
                    color: isActive || isHovered ? '#DB2777' : 'transparent',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                }}
            />
        </div>
    );
}
