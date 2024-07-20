import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditProductPage = () => {
  const params = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    const response = await axiosInstance.get(`/products/${params.productId}`);
    setSingleProduct(response.data);
  };

  const handleEdit = (allValues) => {
    console.log(allValues);
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
