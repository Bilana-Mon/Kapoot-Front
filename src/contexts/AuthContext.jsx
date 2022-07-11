import React, { useContext, useState } from 'react';

const AuthContext = React.createContext({
  isLogged: false,
  setIsLogged: () => { }
});


export function useLoggedInUser() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);


  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <h1>{JSON.stringify(isLogged)}</h1>
      {children}
    </AuthContext.Provider>
  )
}

