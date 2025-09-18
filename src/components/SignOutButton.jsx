import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove user session
    localStorage.removeItem("railcontrol_user");
    localStorage.removeItem("railcontrol_auth_token");

    // Redirect to login page
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
