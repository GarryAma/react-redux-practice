import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const HasLoggedPage = ({ children }) => {
  const userSelector = useSelector((state) => state.user);

  if (!userSelector.id) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};
