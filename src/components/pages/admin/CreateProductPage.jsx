import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateProductFormSchema = z.object({
  name: z
    .string()
    .min(3, "Your product name is under 3 chars")
    .max(80, "your product name is over 80 chars"),

  price: z.coerce.number().min(1, "invalid price - under $ 1 AUD"),
  stock: z.coerce.number().min(1, "stock cant be 0"),
  imageUrl: z.string().url("use a valid URL"),
});

export const CreateProductPage = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      imageUrl: "",
    },
    resolver: zodResolver(CreateProductFormSchema),
    reValidateMode: "onSubmit",
  });

  const handleCreateProduct = (allValues) => {
    console.log(allValues);
  };

  return (
    <AdminLayout title="Create Products" description="Add new products">
      <Form {...form}>
        <form
          className="max-w-[540px] w-full"
          onSubmit={form.handleSubmit(handleCreateProduct)}
        >
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
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
                    <FormLabel>Stock Name :</FormLabel>
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
                name="imageUrl"
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
              <Button className="w-full" variant="default" type="submit">
                Add Product
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </AdminLayout>
  );
};
