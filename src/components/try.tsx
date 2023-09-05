import React, { createContext, useEffect, useState } from "react";
import { tUser, UserContextType, UserContextProviderProps } from "./interfaces";
export const UserContext = createContext<UserContextType | null>(null);
const defaultUser = {
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
            "lat": "",
            "lng": ""
        }
    },
    "phone": "",
    "website": "",
    "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    }
}
const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, setUser] = useState<tUser>(defaultUser);
    useEffect(() => {
        getUser();
    }, []);
    async function getUser() {
        const temp: void | tUser = await fetchData(
            `https://jsonplaceholder.typicode.com/users/${(Math.floor(Math.random() * 10) + 1)}`
        );
        if (temp) {
            setUser(temp);
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;
















