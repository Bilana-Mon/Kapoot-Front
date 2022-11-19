import create from "zustand";

export const useSessionStore = create((set, get) => {
    const initialState = {
        isLogged: false,
        nickname: '',
        accessToken: localStorage.getItem('accessToken'),
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
            return { accessToken: token }
        }),
        login: (token, nickname) => set(state => {
            localStorage.setItem('accessToken', token)
            return { nickname, accessToken: token, isLogged: true }
        }),
        disconnect: () => set(state => {
            localStorage.clear('accessToken');
            return { accessToken: '', isLogged: false }
        }),
        setSessionFetched: (value) => set(state => {
            return { sessionFetched: value }
        }),
    }
})