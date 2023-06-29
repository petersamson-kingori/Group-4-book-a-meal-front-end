import React from "react";
import { useAuth } from "./auth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user ? user.name : "Guest"}!</h2>
      {/* Additional content for the user profile */}
    </div>
  );
};

export default UserProfile;
