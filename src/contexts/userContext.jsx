import React, { useContext, useState } from 'react';

const UserContext = React.createContext({
  isLogged: false,
  setIsLogged: () => { }
});


export function useLoggedInUser() {
  return useContext(UserContext)
}

export function UserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);


  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      <h1>{JSON.stringify(isLogged)}</h1>
      {children}
    </UserContext.Provider>
  )
}

