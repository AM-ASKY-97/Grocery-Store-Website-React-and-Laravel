import React, { useEffect, useState } from 'react'

import LoadingPage from '../Loding/LodingPage';
import NewAccount from '../NewAccount';

const LoginMain = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <div>
            {
                loading ? (
                    <LoadingPage />
                ) : (
                    <NewAccount />
                )
            }
        </div>
    )
}

export default LoginMain