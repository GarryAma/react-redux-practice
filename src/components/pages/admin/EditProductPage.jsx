import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import React from "react";

export const EditProductPage = () => {
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
