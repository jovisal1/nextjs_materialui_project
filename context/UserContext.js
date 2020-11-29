import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const _ = require('lodash');

export const defaultUser = {
    name: 'Pepe',
    email: 'pvidalsalvador@gmail.com',
};

const UserContext = React.createContext(defaultUser);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (_.isEmpty(user)) {
            router.push('/login');
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
