import { useSessionStore } from "../store";

export const useSession = () => {
    const sessionStore = useSessionStore();

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