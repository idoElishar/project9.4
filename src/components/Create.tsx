import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
export default function NewTrip() {
    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        price: "",
        image: "",
        activities: [],
    });
    const handleChange = (w: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = w.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/trips", formData,
            {
                headers: {
                    authorization: 'test-token'
                },
            });
            console.log(response.data)
        } catch (error) {
            console.error("Error adding trip:", error);
        }
    };
    return (
        <div>
            <h2>Add a New Trip</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Activities (comma-separated):</label>
                    <input
                        type="text"
                        name="activities"
                        value={formData.activities}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Trip</button>
            </form>
        </div>
    );
}
