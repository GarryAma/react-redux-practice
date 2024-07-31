import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const userSelector = useSelector((state) => {
    // console.log("header printed");
    console.log(state);
    return state.user;
  });

  const dispatch = useDispatch();

  const handleLogOut = () => {
    //1.remove localstorage
    localStorage.removeItem("current-user");

    //2.reset userSlice
    dispatch({
      type: "USER_LOGOUT",
    });
  };

  return (
    // <header className="h-16 border-b border-black-100 flex items-center justify-between px-8">
    <header className="h-16 border-b border-black-100 flex items-center justify-between px-8">
      <p className="font-bold text-bold hover:cursor-pointer hover:text-slate-500 transition-all ease-in-out">
        Shope | ecomm
      </p>

      <Input className="max-w-[400px]" placeholder="search products..." />

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
        <div className="flex space-x-2 items-center">
          {userSelector.username ? (
            <>
              <p>Hello, {userSelector.username}</p>
              <Button variant="destructive" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>sign in</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
