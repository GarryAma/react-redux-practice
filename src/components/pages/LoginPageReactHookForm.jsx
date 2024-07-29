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
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, "Your username is under 3 chars")
    .max(10, "your username is over 10 chars"),

  password: z.string().min(8, "Your password is incorrect"),
});

export const LoginPageReactHookForm = () => {
  const [isChecked, setIsCheched] = useState(false);

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  // console.log(form);

  const handleLogin = async (values) => {
    const response = await axiosInstance.get("users", {
      params: {
        username: values.username,
        password: values.password,
      },
    });

    if (!response.data.length) {
      alert("invalid credentials");
      return;
    }

    if (response.data[0].password !== values.password) {
      alert("invalid credentials");
      return;
    }

    alert(`you are successfully logged in as ${response.data[0].username}`);
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[90vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="w-full max-w-[540px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Welcome back ...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username :</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      <li>username must between 3 and 10 chars</li>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={(jajal) => {
                  // console.log(jajal);
                  return (
                    <FormItem>
                      <FormLabel>Password :</FormLabel>
                      <FormControl>
                        <Input
                          type={isChecked ? "text" : "password"}
                          {...jajal.field}
                        />
                      </FormControl>
                      <FormDescription>
                        <li>password must be 8 chars or more</li>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
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
                {/* disabled={!form.formState.isValid}  */}
                <Button type="submit">Login</Button>
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
      </Form>
    </main>
  );
};
