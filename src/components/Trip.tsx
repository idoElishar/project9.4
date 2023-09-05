import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserData {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}
async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json()
        return user;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function Trip() {
    const [users, setUsers] = useState<UserData | null>(null);
    const { id } = useParams<{ id: string }>();
    
    async function getUsers() {

        const tempUsers: UserData | null = await fetchData(
            `http://localhost:3000/api/trips/${id as string}`
        );
        console.log(tempUsers);
        if (tempUsers !== null) {
            setUsers(tempUsers);
        } else {
        }
    }

    useEffect(() => {
        getUsers();
    }, []);



    return (
        <div>
            {users ? (
                <>
                    <h2> {users.name}</h2>
                    <p>Destination: {users.destination}</p>
                    <p>Start Date: {users.startDate}</p>
                    <p>End Date: {users.endDate}</p>
                    <img src={users.image} alt={users.name} width={100} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Trip;






