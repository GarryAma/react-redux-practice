import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import React from "react";
import { useParams } from "react-router-dom";

export const EditProductPage = () => {
  const result = useParams();
  console.log(result);
  const handleEdit = (allValues) => {
    console.log(allValues);
  };
  return (
    <AdminLayout title="Edit Product" description="Alter Product">
      <ProductForm
        onSubmission={handleEdit}
        buttonText="Edit Product"
        cardTitle="Edit Product"
      />
    </AdminLayout>
  );
};
