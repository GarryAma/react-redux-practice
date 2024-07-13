import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoAdd } from "react-icons/io5";

export const ProductManagementPage = () => {
  return (
    <div>
      <AdminLayout
        title="Products Management"
        description="Manage our products"
        rightSection={
          <Button>
            <IoAdd className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        }
      >
        <h1>Product Management Page Content</h1>
        <div className="w-[200px] h-[200px] bg-red-500"></div>
      </AdminLayout>
    </div>
  );
};
