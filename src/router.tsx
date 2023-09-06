import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import Trip from './components/Trip';
import Delete from './components/Delete';
import Create from './components/Create';
import UpdateTrip from './components/UpdateTrip';
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';
function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/Trip/:id" element={<Trip />} />
                    <Route path="/Trip/update/:id" element={<UpdateTrip />} />
                    <Route path="/Delete/:id" element={<Delete />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/api/auth/register" element={< UserRegistration/>} />
                    <Route path="/api/auth/login" element={< Login/>} />

                </Routes>
            </Router>
        </div>
        
    )
}
export default Ruoter