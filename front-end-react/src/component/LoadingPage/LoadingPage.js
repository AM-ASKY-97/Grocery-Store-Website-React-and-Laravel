import React from 'react'

import './LoadingPage.css'
import ClipLoader from "react-spinners/HashLoader";

const LoadingPage = () => {
    return (
        <div className='loading'>
            <div className='lo'>
                <ClipLoader
                    size={150}
                    color='#ff7800'
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>

            <h3>buy best <span> organic product </span> online </h3>
        </div>
    )
}

export default LoadingPage