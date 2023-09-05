import { Link } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Trips from './Trips';


function Home() {
    const [showTrips, setShowTrips] = useState(false);

    const handleClick = () => {
        setShowTrips(true);
    }

    return (
        <div>
            <Link to="/Trips/"><button>show trips</button></Link>
        </div>
    );
}

export default Home;

