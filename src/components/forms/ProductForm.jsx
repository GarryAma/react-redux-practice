import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const productFormSchema = z.object({
  name: z
    .string()
    .min(3, "Your product name is under 3 chars")
    .max(80, "your product name is over 80 chars"),

  price: z.coerce.number().min(1, "invalid price - under $ 1 AUD"),
  stock: z.coerce.number().min(1, "stock cant be 0"),
  image: z.string().url("use a valid URL"),
});

export const ProductForm = ({
  onSubmission,
  isPressed,
  buttonText,
  cardTitle,
  singleProduct,
}) => {
  console.log(singleProduct);
  const form = useForm({
    defaultValues: {
      name: singleProduct?.name || "",
      price: singleProduct?.price || 0,
      stock: singleProduct?.stock || 0,
      image: singleProduct?.image || "",
    },
    resolver: zodResolver(productFormSchema),
    reValidateMode: "onSubmit",
  });
  return (
    <Form {...form}>
      <form
        className="max-w-[540px] w-full"
        onSubmit={form.handleSubmit(onSubmission)}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">{cardTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    <li>Product name must between 3 and 80 chars</li>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price :</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    <li>Stock quantity can't be 0</li>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock :</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    <li>Product name must between 3 and 80 chars</li>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    <li>Image must a valid URL</li>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={isPressed}
              className="w-full"
              variant="default"
              type="submit"
            >
              {buttonText}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
