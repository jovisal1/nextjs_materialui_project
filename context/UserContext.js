import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const _ = require('lodash');
const UserContext = React.createContext({});

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
