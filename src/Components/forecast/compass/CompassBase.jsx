import React from 'react';
import CompassWindPath from './CompassWindPath'

const Compass = props => {

    return (
        <svg width="100%" viewBox="0 0 608 608">
            <g>
                <circle cx="304" cy="304" r="240" fill="transparent" strokeWidth="2" stroke="#5f5f5f"></circle>
                <circle cx="304" cy="304" r="180" fill="transparent" strokeWidth="2" stroke="#5f5f5f"></circle>
                <circle cx="304" cy="304" r="120" fill="transparent" strokeWidth="2" stroke="#5f5f5f"></circle>
                <circle cx="304" cy="304" r="60" fill="transparent" strokeWidth="2" stroke="#5f5f5f"></circle>
                <line x1="304" x2="304" y1="64" y2="544" strokeWidth="2" stroke="#5f5f5f"></line>
                <line x1="64" x2="544" y1="304" y2="304" strokeWidth="2" stroke="#5f5f5f"></line>
                <text fontSize="20" fontWeight="bold" fill="#ffffff" transform="translate(352, 256)">0.8</text>
                <text fontSize="20" fontWeight="bold" fill="#ffffff" transform="translate(390.4, 217.60000000000002)">1.5</text>
                <text fontSize="20" fontWeight="bold" fill="#ffffff" transform="translate(433.6, 174.39999999999998)">2.3</text>
                <text fontSize="20" fontWeight="bold" fill="#ffffff" transform="translate(476.79999999999995, 131.20000000000002)">3.0</text>
                <text fontSize="20" fontWeight="bold" color="#ffffff" textAnchor="middle" transform="translate(304, 60)">0°</text>
                <text fontSize="20" fontWeight="bold" color="#ffffff" textAnchor="start" alignmentBaseline="middle" transform="translate(548, 304)">90°</text>
                <text fontSize="20" fontWeight="bold" color="#ffffff" textAnchor="middle" transform="translate(304, 564)">180°</text>
                <text fontSize="20" fontWeight="bold" color="#ffffff" textAnchor="end" alignmentBaseline="middle" transform="translate(64, 304)">270°</text>
            </g>
            <CompassWindPath />
            <g>
                <text fill="#ffffff" fontSize="12" transform="translate(449.92, 564)">Color denotes wave period</text><text fill="#ffffff" fontSize="12" transform="translate(355.67999999999995, 583)">Wave Direction (°) vs Wave Energy (m^2Hz)</text>
            </g>
        </svg>
    );
}

export default Compass;