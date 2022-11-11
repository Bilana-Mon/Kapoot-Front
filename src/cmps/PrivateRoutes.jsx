import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

const PrivateRoutes = () => {
    const { isLogged } = useSession();

    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
