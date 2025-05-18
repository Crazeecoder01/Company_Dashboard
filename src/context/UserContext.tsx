import React, { createContext, useEffect, useState } from 'react'

type User = {
    email: string;
    password: string;
};
  
type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};
  
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode })=>{
    const [user, setUser] = useState<User | null>(null);

    useEffect(()=>{
        const userData = localStorage.getItem('user')
        if(userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    useEffect(()=>{
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            localStorage.removeItem("user");
          }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      );
}
export default UserContext