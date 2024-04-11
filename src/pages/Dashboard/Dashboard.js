import "./Dashboard.scss";
import { useEffect, useState } from 'react';
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../const"; 

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const getUserData = async() => {

        try {
            const response = await axios.get(`${REACT_APP_BASE_URL}/users/dashboard`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUserData(response.data);
        } catch (error) { 
            setError("Failed to get user data");     
        }
        setIsLoading(false);
    };

    getUserData();
}, []);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        window.location.href = '/login';
    };
        
    if (isLoading) {
        return (
            <main className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>
                <p>Loading...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>
                <p>{error}</p>
                <button onClick={handleLogout}>Log out</button>
            </main>
        );
    }


    return (
        <main className="dashboard">
            <h1 className="dashboard__title">Dashboard</h1>
            {userData && (
                <>
            <p>Welcome to your dashboard, {userData.username}</p>

            <h2>My Profile</h2>
            <p>Name:{userData.name}</p>
            <p>Email:{userData.email}</p>
            </>
        )}

            <button onClick={handleLogout}>Log out</button>
        </main>
    );  
}

export default Dashboard;