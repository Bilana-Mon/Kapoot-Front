import { useEffect, useState } from "react";
import { useSessionStore } from "../store";

export const useSession = () => {
    const [isLoading, setIsLoading] = useState(false);
    const sessionStore = useSessionStore();

    useEffect(() => {
        const fetchMe = async () => {
            setIsLoading(true);
            const meResponse = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStore.accessToken}`,
                },
            });
            console.log('me endpoint', `${import.meta.env.VITE_APP_API_URL}/auth/me`);
            console.log('meResponse', meResponse);

            setIsLoading(false);
            if (!meResponse.ok) {
                sessionStore.disconnect();
            }
            const mePayload = await meResponse.json();
            sessionStore.setIsLogged(true);
            sessionStore.setNickname(mePayload.nickname);
            sessionStore.setSessionFetched(true);
        };
        const checkIfToFetch = sessionStore.accessToken && !sessionStore.sessionFetched;
        checkIfToFetch && fetchMe();
    }, [sessionStore.isLogged]);

    const login = (token, nickname) => sessionStore.login(token, nickname);
    const disconnect = () => sessionStore.disconnect();
    const isLogged = sessionStore.isLogged;
    const setNickname = (nickname) => sessionStore.setNickname(nickname);
    const nickname = sessionStore.nickname;
    const setToken = (token) => sessionStore.setToken(token);

    return {
        login,
        disconnect,
        isLogged,
        setNickname,
        nickname,
        setToken,
        isLoading
    }
}