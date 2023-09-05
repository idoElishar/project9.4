import { Link,useParams } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Create from './Create';
import Trip from './trip';

interface UserData {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}

function Trips() {
    const [users, setUsers] = useState<UserData[]>([]);
    const [showUsers, setShowUsers] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    async function fetchData(url: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    async function getUsers() {
        const tempUsers: UserData[] | null = await fetchData(
            'http://localhost:3000/api/trips/'
        );
        if (tempUsers) {
            setUsers(tempUsers);
        }
    }


    return (
        <div>
            <div>
                <ol>
                        {users.map((user) => (
                            <div>
                            <Link to={`/Trip/${user.id}`}> <button >
                            <li key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>Destination: {user.destination}</p>
                                <p>Start Date: {user.startDate}</p>
                                <p>End Date: {user.endDate}</p>
                                <img src={user.image} alt={user.name} width={100} />
                            </li>
                            </button>
                            </Link>
                            <Link to={`/Delete/${user.id}`}><button> click to delete</button></Link>
                            </div>
                        ))}
                    
                </ol>

            </div>
        </div>
    );
}

export default Trips;