import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const GuestPage = ({ children }) => {
  const userSelector = useSelector((state) => {
    console.log(state);
    return state.user;
  });

  //cant be used
  //   const navigate = useNavigate();

  if (userSelector.id) {
    return <Navigate to="/" />;
    // navigate("/");
  }

  return <>{children}</>;
};
