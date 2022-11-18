import create from "zustand";

export const useSessionStore = create((set, get) => {
    const initialState = {
        isLogged: false,
        nickname: '',
        accessToken: '',
        storageAccessToken: localStorage.getItem('accessToken'),
        sessionFetched: false
    }
    return {
        ...initialState,
        setIsLogged: (isLogged) => set(state => ({
            ...state,
            isLogged: isLogged
        })),
        setNickname: (nickname) => set(state => ({
            ...state,
            nickname: nickname
        })),
        setToken: (token) => set(state => {
            const storageToken = localStorage.setItem('accessToken', token)
            return { accessToken: token, storageAccessToken: storageToken }
        }),
        login: (token, nickname) => set(state => {
            const storageToken = localStorage.setItem('accessToken', token)
            return { nickname, accessToken: token, storageAccessToken: storageToken, isLogged: true }
        }),
        disconnect: () => set(state => {
            localStorage.clear('accessToken');
            return { accessToken: '', storageAccessToken: '', isLogged: false }
        }),
        setSessionFetched: (value) => set(state => {
            return { sessionFetched: value }
        }),
    }
})