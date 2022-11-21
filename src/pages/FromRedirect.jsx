import React from 'react';
import { useSession } from '../hooks/useSession';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const FromRedirect = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const { setToken } = useSession();

    const userToken = searchParams.get('userToken');

    React.useEffect(() => {
        if (userToken) {
            setToken(userToken);
            location.reload();
            // navigate('/');
        }
    }, []);

    return <></>;
};
