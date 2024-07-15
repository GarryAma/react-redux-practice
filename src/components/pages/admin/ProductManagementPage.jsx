import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

export const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      // const response = await axiosInstance.get("/products?_limit=5");
      const response = await axiosInstance.get("/products", {
        params: {
          _limit: 5,
          // _page: 1,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // console.log("di useEffect jalan");
    fetchProducts();
  }, []);

  return (
    <>
      {/* {console.log(products)}
      {console.log("di return jsx jalan")} */}
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
        <Table className="p-2 border border-collapse rounded-md">
          {/* {console.log("inside table jalan")}
          {console.log(products)} */}
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {console.log(products)}
            {console.log(products)} */}
            {products.map((singleProduct) => {
              // console.log(singleProduct);
              const { id, name, price, stock } = singleProduct;
              // console.log(id);
              return (
                <TableRow>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{stock}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Ellipsis className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </AdminLayout>
    </>
  );
};
