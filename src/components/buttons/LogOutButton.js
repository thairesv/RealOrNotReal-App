import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/loginSlice";

function LogOutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <button className="log-out-button back-button pointer" onClick={handleLogout}>
      <i class="fa-solid fa-user"></i> Log Out
      </button>
    </div>
  );
}

export default LogOutButton;
