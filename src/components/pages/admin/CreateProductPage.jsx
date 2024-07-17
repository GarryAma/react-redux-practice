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
import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const CreateProductFormSchema = z.object({
  name: z
    .string()
    .min(3, "Your product name is under 3 chars")
    .max(80, "your product name is over 80 chars"),

  price: z.coerce.number().min(1, "invalid price - under $ 1 AUD"),
  stock: z.coerce.number().min(1, "stock cant be 0"),
  image: z.string().url("use a valid URL"),
});

export const CreateProductPage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      image: "",
    },
    resolver: zodResolver(CreateProductFormSchema),
    reValidateMode: "onSubmit",
  });

  console.log(form);
  console.log(navigate);

  const { toast } = useToast();

  const handleCreateProduct = async (allValues) => {
    setIsPressed((currentState) => !currentState);
    try {
      const response = await axiosInstance.post("/products", allValues);
      console.log(response);

      toast({
        title: "Successfully Added ",
        description: "Product is in database now",
        action: (
          <ToastAction
            altText="oke"
            onClick={() => navigate("/admin/products")}
          >
            OK
          </ToastAction>
        ),
      });

      //   form.reset();

      //   navigate("/admin/products");
    } catch (error) {
      console.log(error);
      console.log(error.message);
    } finally {
      setIsPressed(true);
    }
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
              <CardTitle className="font-bold">Add New Product</CardTitle>
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
                Add Product
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </AdminLayout>
  );
};
