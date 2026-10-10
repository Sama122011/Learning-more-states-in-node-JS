"use client";

import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const savedUser = localStorage.getItem("user");
  
      if (savedUser) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setUser(JSON.parse(savedUser));
      }
    }, [])


  // return localStorage.getItem('theme')
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("there is no user logged in, please login first");
  }

  return context;
}

