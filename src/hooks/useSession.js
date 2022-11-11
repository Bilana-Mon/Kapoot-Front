import { useEffect } from "react";
import { useSessionStore } from "../store";

export const useSession = () => {
    const sessionStore = useSessionStore();

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const meResponse = await fetch('http://localhost:4000/auth/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStore.storageAccessToken}`,
                    },
                });
                const mePayload = await meResponse.json();
                sessionStore.setIsLogged(true);
                sessionStore.setNickname(mePayload.nickname);
            }
            catch (err) {
                sessionStore.disconnect();
            }
            sessionStore.setSessionFetched(true);
        };
        const checkIfToFetch = sessionStore.storageAccessToken && !sessionStore.sessionFetched;
        checkIfToFetch && fetchMe();
    }, [sessionStore.isLogged]);

    const login = (token, nickname) => sessionStore.login(token, nickname);
    const disconnect = () => sessionStore.disconnect();
    const isLogged = sessionStore.isLogged;
    const setNickname = (nickname) => sessionStore.setNickname(nickname);
    const nickname = sessionStore.nickname;

    return {
        login,
        disconnect,
        isLogged,
        setNickname,
        nickname
    }
}