import React from "react";
import { useAuth } from "./auth";

const UserProfile = () => {
  const { user } = useAuth();

  console.log("User:", user); // Add this line to log the user object

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.username}!</h2>
      ) : (
        <h2>Welcome, Guest!</h2>
      )}
      {/* Additional content for the user profile */}
    </div>
  );
};

export default UserProfile;
