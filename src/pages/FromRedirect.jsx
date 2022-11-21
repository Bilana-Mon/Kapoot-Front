import React from 'react';
import { useSession } from '../hooks/useSession';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const FromRedirect = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const { setToken } = useSession();

    const userToken = searchParams.get('userToken');

    React.useEffect(() => {
        if (userToken) {
            setToken(userToken);
            setRefresh(true);

            navigate(import.meta.env.VITE_APP_URL);
        }
    }, []);

    return <></>;
};
