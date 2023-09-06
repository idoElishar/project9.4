import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import Trip from './components/Trip';
import Delete from './components/Delete';
import Create from './components/Create';
import UpdateTrip from './components/UpdateTrip';
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
                </Routes>
            </Router>
        </div>
        
    )
}
export default Ruoter