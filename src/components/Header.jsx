import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    // <header className="h-16 border-b border-black-100 flex items-center justify-between px-8">
    <header className="h-16 border-b border-black-100 flex items-center justify-between px-8">
      {/* brand */}

      <p className="font-bold text-bold hover:cursor-pointer">Shope | ecomm</p>

      {/* search-bar */}
      <Input className="max-w-[400px]" placeholder="search products..." />

      {/* button */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Link to="/cart">
            <Button size="icon" variant="ghost">
              <IoCart className="h-6 w-6" />
            </Button>
          </Link>
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex space-x-2">
          <Button>sign in</Button>
          <Button variant="outline">sign up</Button>
        </div>
      </div>
    </header>
  );
};
