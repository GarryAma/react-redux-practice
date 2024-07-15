import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

export const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ halaman: 1 });
  console.log(searchParams.get("halaman"));

  // console.log("this render");

  const handleNextPage = () => {
    searchParams.set("halaman", Number(searchParams.get("halaman")) + 1);
    setSearchParams(searchParams);
  };

  const handlePreviousPage = () => {
    if (Number(searchParams.get("halaman")) > 1) {
      searchParams.set("halaman", Number(searchParams.get("halaman")) - 1);
      setSearchParams(searchParams);
    } else {
      alert("sudah ada di halaman 1");
    }
  };

  const fetchProducts = async () => {
    try {
      // const response = await axiosInstance.get("/products?_limit=5");
      const response = await axiosInstance.get("/products", {
        //we can use config params:{} ->given by axios to handle query params
        params: {
          // _limit: 5, =>if we use _page we're not allowed to use _limit anymore(json-server), we must use _per_page(json-server)
          _per_page: 5,
          _page: Number(searchParams.get("halaman")),
        },
      });
      // console.log(response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // console.log("di useEffect jalan");
    fetchProducts();
  }, [searchParams.get("halaman")]);

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
            {products.map((singleProduct, i) => {
              // console.log(singleProduct);
              const { id, name, price, stock } = singleProduct;
              // console.log(id);
              return (
                <TableRow key={i}>
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

        <Pagination className={"mt-8"}>
          <PaginationContent>
            <PaginationItem>
              <Button onClick={handlePreviousPage} variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem className="mx-8 font-semibold text-xs">
              Page {searchParams.get("halaman")}
            </PaginationItem>
            <PaginationItem>
              <Button onClick={handleNextPage} variant="ghost">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </AdminLayout>
    </>
  );
};

//why do we use useSearchParams?because it persist the state,so when we refresh, it will stay on the current page and it doenst reset state!!unlike useState,it will reset the state so it will come back to initial state!!
