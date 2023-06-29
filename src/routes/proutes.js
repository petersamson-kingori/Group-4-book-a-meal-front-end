import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Make a request to the server to get the current user
      fetch("https://group-4-book-a-meal-api.onrender.com/api/v1/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              setCurrentUser(data.user);
            });
          } else {
            // If the token is invalid or expired, you can clear it from local storage and redirect to the login page
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (currentUser) {
    navigate("/profile");
  }

  return <Login setCurrentUser={setCurrentUser} />;
}

export default ProtectedRoutes;
