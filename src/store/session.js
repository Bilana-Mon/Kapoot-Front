import create from "zustand";

export const useSessionStore = create((set, get) => {
    const initialState = {
        isLogged: false,
        user: {
            nickname:'Guest',
            email:'',
            password:'',
            isAdmin:false
        },
        accessToken: '',
        storageAccessToken:localStorage.getItem('accessToken')
    }
    return {
        ...initialState,
        setAccessToken: (accessToken) => set(state => ({
            ...state,
            accessToken: accessToken,
            storageAccessToken:localStorage.setItem('accessToken',accessToken)
        })),
        setIsLogged: (isLogged) => set(state => ({
            ...state,
            isLogged: isLogged
        })),
        setUser: (user) => set(state => ({
            ...state,
            user: user
        }))
    }
})