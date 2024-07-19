import { AdminLayout } from "@/components/layout/AdminLayout";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "@/components/forms/ProductForm";

export const CreateProductPage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();

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
      <ProductForm
        onSubmission={handleCreateProduct}
        isPressed={isPressed}
        buttonText="Add Product"
        cardTitle="Add New Product"
      />
    </AdminLayout>
  );
};
