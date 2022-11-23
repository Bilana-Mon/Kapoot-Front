import React from 'react';
import { useSession } from '../hooks/useSession';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const FromRedirect = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const { setToken } = useSession();

    const userToken = searchParams.get('userToken');

    useEffect(() => {
        if (userToken) {
            setToken(userToken);
            console.log('from redirect', import.meta.env.VITE_APP_URL);
            // window.location.assign(import.meta.env.VITE_APP_URL);
            // import.meta.env.VITE_APP_URL
        }
    }, []);

    return <></>;
};
