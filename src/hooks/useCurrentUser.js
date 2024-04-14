import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../const";

const TOKEN = sessionStorage.getItem("token");

const useCurrentUser = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${REACT_APP_BASE_URL}/users/dashboard`,
          {
            headers: { Authorization: `Bearer ${TOKEN}` },
          }
        );
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to get user data");
        setIsLoading(false);
      }
    };

    if (TOKEN) getUserData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  const isNotLoggedIn = !TOKEN;

  return {
    userData,
    isLoading,
    error,
    handleLogout,
    isNotLoggedIn,
  };
};

export default useCurrentUser;
