import create from "zustand";

export const useSessionStore = create((set, get) => {
    const initialState = {
        isLogged: false,
        user: {},
        accessToken: ''
    }
    return {
        ...initialState,
        setAccessToken: (accessToken) => set(state => ({
            ...state,
            accessToken: accessToken
        })),
        setIsLogged: (isLogged) => set(state => ({
            ...state,
            isLogged: isLogged
        }))
    }
})