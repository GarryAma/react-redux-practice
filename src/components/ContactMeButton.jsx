import React from "react";

export const ContactMeButton = ({ children }) => {
  return (
    <button className="bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800">
      {children}
    </button>
  );
};
