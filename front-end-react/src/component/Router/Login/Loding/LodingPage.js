import React from 'react';
import './Loding.css';

const LoadingPage = () => {
    return (
        <div className='body'>
            <div className="circle">
                <div className="border" style={{ '--i': 0.01 }}></div>
                <div className="border" style={{ '--i': 0.02 }}></div>
                <div className="border" style={{ '--i': 0.03 }}></div>
                <div className="border" style={{ '--i': 0.04 }}></div>
                <div className="border" style={{ '--i': 0.05 }}></div>
                <div className="border" style={{ '--i': 0.06 }}></div>
                <div className="border" style={{ '--i': 0.07 }}></div>
                <div className="border" style={{ '--i': 0.08 }}></div>
                <div className="border" style={{ '--i': 0.09 }}></div>
                <div className="border" style={{ '--i': 0.10 }}></div>
                <div className="border" style={{ '--i': 0.11 }}></div>
                <div className="border" style={{ '--i': 0.12 }}></div>
                <div className="loadingText">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingPage;
