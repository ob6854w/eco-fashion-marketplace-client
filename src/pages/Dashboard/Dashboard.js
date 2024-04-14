import "./Dashboard.scss";
import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useEffect } from "react";

function Dashboard() {
  const { userData, isLoading, error, handleLogout, isNotLoggedIn } =
    useCurrentUser();

  useEffect(() => {
    if (isNotLoggedIn) {
      window.location.href = "/login";
    }
  }, [isNotLoggedIn]);

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

          <button onClick={handleLogout}>Log out</button>
        </>
      )}
    </main>
  );
}

export default Dashboard;
