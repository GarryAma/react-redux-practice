import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen">
      <p className="text-4xl font-bold">404 : Page not found</p>
      <Link to={"/"}>
        <Button>back to home</Button>
      </Link>
    </div>
  );
};
