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

  const handleOnSubmit = () => {};

  return (
    <div className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[90vh]">
      <Card className="w-full max-w-[540px]">
        <CardHeader>
          <CardTitle>Welcome back ...</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label htmlFor="username">Username : </Label>
            <Input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              id="username"
            />
          </div>
          <div>
            <Label htmlFor="password">Password : </Label>
            <Input
              onChange={(event) => setPassword(event.target.value)}
              type={isChecked ? "text" : "password"}
              id="password"
            />
            <p className="text-xs text-gray-500">{errorPasswordMessage}</p>
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
            <Button onClick={handleOnSubmit}>Login</Button>
            <Button
              variant="link"
              className="hover:font-light hover:text-green-900"
            >
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
