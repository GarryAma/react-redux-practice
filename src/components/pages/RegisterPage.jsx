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
import { toast } from "../ui/use-toast";
import { Toast, ToastAction } from "../ui/toast";
import { Toaster } from "../ui/toaster";

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Your username is under 3 chars")
      .max(10, "your username is over 10 chars"),
    password: z.string().min(8, "Your password is incorrect"),
    repeatPassword: z.string().min(8, "Your password is incorrect"),
  })
  .superRefine(({ password, repeatPassword }, ctx) => {
    if (password !== repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password isn't match",
        path: ["repeatPassword"],
      });
    }
  });

export const RegisterPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
    },
    resolver: zodResolver(registerFormSchema),
    reValidateMode: "onSubmit",
  });

  //   console.log(form);

  const handleRegister = async (values) => {
    const { username, password } = values;
    try {
      //biasanya pe-ngecekan exist user di check di backend,bukan di front end,tapi ini pengecualian karena kita pakai json server
      const userResponse = await axiosInstance.get("/users", {
        params: {
          username: values.username,
        },
      });
      console.log(userResponse);
      if (userResponse.data.length) {
        alert("username has been taken");
        return;
      }

      await axiosInstance.post("/users", { username, password });

      toast({
        title: "Success ",
        description: "Successfully registered",
        action: (
          <ToastAction
            className="bg-green-500"
            altText="oke"
            // onClick={() => navigate("/admin/products")}
          >
            OK
          </ToastAction>
        ),
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[90vh] ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="w-full max-w-[540px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Create new account</CardTitle>
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
                  //   console.log(jajal);
                  return (
                    <FormItem>
                      <FormLabel>Password :</FormLabel>
                      <FormControl>
                        <Input type="password" {...jajal.field} />
                      </FormControl>
                      <FormDescription>
                        <li>password must be 8 chars or more</li>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="repeatPassword"
                render={(jajal) => {
                  //   console.log(jajal);
                  return (
                    <FormItem>
                      <FormLabel>Repeat Password :</FormLabel>
                      <FormControl>
                        <Input type="password" {...jajal.field} />
                      </FormControl>
                      <FormDescription>
                        <li>Password must match</li>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                {/* disabled={!form.formState.isValid}  */}
                <Button type="submit">Register</Button>
                <Button
                  variant="link"
                  className="hover:font-light hover:text-green-900 transition-all duration-300"
                >
                  Login instead
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
        {/* <Toaster /> */}
      </Form>
    </main>
  );
};
