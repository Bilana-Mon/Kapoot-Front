import React from 'react';
import { useSession } from '../hooks/useSession';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const FromRedirect = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const { setToken } = useSession();

    const userToken = searchParams.get('userToken');
    const refreshPage = (url) => {
        window.location.reload(false);
        navigate(url);
    };

    React.useEffect(() => {
        if (userToken) {
            setToken(userToken);
            refreshPage(import.meta.env.VITE_APP_URL);
            // navigate('/');
        }
    }, []);

    return <></>;
};
