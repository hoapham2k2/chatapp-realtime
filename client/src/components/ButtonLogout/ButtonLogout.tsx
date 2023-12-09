import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const ButtonLogout = (props: Props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    // remove name from local storage
    localStorage.removeItem("name");
    // redirect to login page
    navigate("/login");
  };
  return <button onClick={handleOnClick}>ButtonLogout</button>;
};

export default ButtonLogout;
