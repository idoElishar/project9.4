import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import Trip from './components/trip';
function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/Trip/:id" element={<Trip />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter