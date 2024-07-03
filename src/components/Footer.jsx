import React from "react";
import { ContactMeButton } from "./ContactMeButton";

export const Footer = () => {
  return (
    <footer className="h-16 py-8 border-t flex items-center justify-between px-20">
      <p className="text-sm font-light">Shope Ecomm copyright 2024</p>
      <ContactMeButton>contact me</ContactMeButton>
    </footer>
  );
};
