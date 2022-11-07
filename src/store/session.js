import create from "zustand";

export const useSessionStore = create((set, get) => {
    const initialState = {
        isLogged: false,
        nickname: '',
        accessToken: '',
        storageAccessToken: localStorage.getItem('accessToken')
    }
    return {
        ...initialState,
        // setAccessToken: (accessToken) => set(state => ({
        //     ...state,
        //     accessToken: accessToken,
        //     storageAccessToken: localStorage.setItem('accessToken', accessToken)
        // })),
        setIsLogged: (isLogged) => set(state => ({
            ...state,
            isLogged: isLogged
        })),
        setNickname: (nickname) => set(state => ({
            ...state,
            nickname: nickname
        })),
        login: (token, nickname) => set(state => {
            const storageToken = localStorage.setItem('accessToken', token)
            return { nickname, accessToken: token, storageAccessToken: storageToken, isLogged: true }
        }),
        disconnect: () => set(state => {
            localStorage.clear('accessToken');
            return { accessToken: '', storageAccessToken: '', isLogged: false }
        })
    }
})