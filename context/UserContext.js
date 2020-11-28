import React, { useState } from 'react';

export const defaultUser = {
    name: 'Pepe',
    email: 'pvidalsalvador@gmail.com',
};

const UserContext = React.createContext(defaultUser);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
