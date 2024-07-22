import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditProductPage = () => {
  const params = useParams();
  const { toast } = useToast();
  const [singleProduct, setSingleProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${params.productId}`);
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (allValues) => {
    try {
      const response = await axiosInstance.patch(
        `/products/${params.productId}`,
        allValues
      );
      console.log(response.data);

      toast({
        title: "Successfully Editted ",
        description: "Product has altered in database now",
        action: (
          <ToastAction
            altText="oke"
            onClick={() => navigate("/admin/products")}
          >
            OK
          </ToastAction>
        ),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AdminLayout title={`${singleProduct.name}`} description="Alter Product">
      {singleProduct.id ? (
        <ProductForm
          onSubmission={handleEdit}
          buttonText="Edit Product"
          cardTitle="Edit Product"
          singleProduct={singleProduct}
        />
      ) : null}
    </AdminLayout>
  );
};
