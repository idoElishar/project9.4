import { useState } from "react";
import axios from "axios";

function UserRegistration() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "admin"
    });
    const handleChange = (w: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = w.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/register", formData,
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
            <h2>Register </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">click to Register</button>
            </form>
        </div>
    )
}
export default UserRegistration;