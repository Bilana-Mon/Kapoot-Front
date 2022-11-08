import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

const PrivateRoutes = () => {
    const [isFetchDone, setIsFetchDone] = useState(false)
    const { isLogged } = useSession()

    useEffect(() => {
        fetch('http://localhost:4000/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [])

    return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
