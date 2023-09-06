import { Link, useParams } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Create from './Create';
// import Trip from './trip';
import UpdateTrip from './UpdateTrip';
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

    const handleDelete = async (tripId: number) => {
        try {
            const authToken = localStorage.getItem('token') || '';
            const headers = {
                Authorization: authToken, 
                'Content-Type': 'application/json', 
            };

            await fetch(`http://localhost:3000/api/trips/${tripId}`, {
                method: 'DELETE',
                headers: headers, 
            })
                .then((response) => {
                    if (!response.ok) {
                        console.error('אנא התחבר או הרשם, שגיאה במהלך הבקשה:', response.status);
                    } else {
                        setUsers((prevTrips) =>
                            prevTrips.filter((trip) => trip.id !== String(tripId))
                        );
                    }
                })
                .catch((error) => {
                    console.error('שגיאה לא מצופה:', error);
                });






        } catch (error) {
            console.error('Error deleting trip:', error);
        }
    };

    return (
        <div>
            <div>
                <Link to={"/Create"}><button>click to add Trip</button></Link>
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
                            <button onClick={() => handleDelete(Number(user.id))}>Click to delete</button>
                            <Link to={`/Trips/update/${user.id}`}><button>click to update Trip</button></Link>
                        </div>
                    ))}

                </ol>

            </div>
        </div>
    );
}

export default Trips;