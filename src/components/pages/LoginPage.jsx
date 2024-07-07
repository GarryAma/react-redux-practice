import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsCheched] = useState(false);
  const [errorUsernameMessage, setErrorUsernameMassage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMassage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const usernameIsValid = username.length >= 3;
    const passwordIsValid = password.length >= 8;

    if (!usernameIsValid) {
      alert("username need at least 3 characters or more");
      return;
    }

    if (!passwordIsValid) {
      alert("password need at least 8 characters or more");
      return;
    }

    alert("success");
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[90vh]">
      <form className="w-full max-w-[540px]" onSubmit={handleOnSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Welcome back ...</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username : </Label>
              <Input
                onChange={(event) => {
                  if (event.target.value.length < 3) {
                    setErrorUsernameMassage(
                      "• username need at least 3 characters or more"
                    );
                  } else {
                    setErrorUsernameMassage("");
                  }
                  setUsername(event.target.value);
                }}
                id="username"
              />
              {errorUsernameMessage && (
                <p className="text-xs  text-red-700">{errorUsernameMessage}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password : </Label>
              <Input
                onChange={(event) => {
                  if (event.target.value.length < 8) {
                    setErrorPasswordMassage(
                      "• password need at least 8 characters or more"
                    );
                  } else {
                    setErrorPasswordMassage("");
                  }
                  setPassword(event.target.value);
                }}
                type={isChecked ? "text" : "password"}
                id="password"
              />
              {errorPasswordMessage && (
                <p className="text-xs text-red-700">{errorPasswordMessage}</p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="show password">Show Password:</Label>
              <Checkbox
                id="show password"
                onCheckedChange={(current) => {
                  setIsCheched(current);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-4 w-full">
              <Button
                type="submit"
                disabled={username.length < 3 || password.length < 8}
              >
                Login
              </Button>
              <Button
                variant="link"
                className="hover:font-light hover:text-green-900"
              >
                Sign up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};
