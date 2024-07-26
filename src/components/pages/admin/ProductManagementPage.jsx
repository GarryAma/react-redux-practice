import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { ChevronLeft, ChevronRight, Edit3Icon, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("halaman"));
  const [hasNextPage, setHasNextPage] = useState(false);
  // console.log(hasNextPage);

  const [productName, setProductName] = useState("");
  // console.log(productName);
  // console.log(searchParams.get("search"));
  // console.log("this render");

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  // console.log(selectedProductIds);

  const handleNextPage = () => {
    searchParams.set("halaman", Number(searchParams.get("halaman")) + 1);
    // console.log(searchParams.get("halaman"));
    setSearchParams(searchParams);
  };

  const handlePreviousPage = () => {
    searchParams.set("halaman", Number(searchParams.get("halaman")) - 1);
    setSearchParams(searchParams);
  };

  const searchProduct = () => {
    if (productName) {
      searchParams.set("search", productName);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
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
          name: searchParams.get("search"),
          // _page: Number(searchParams.get("halaman")),
          // name: productName,
        },
      });
      // console.log(response.data);
      setHasNextPage(Boolean(response.data.next));
      setProducts(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnCheckedProduct = (productId, checked) => {
    if (checked) {
      setSelectedProductIds([...selectedProductIds, productId]);
    } else {
      const result = selectedProductIds.filter((item) => item !== productId);
      setSelectedProductIds(result);
    }
  };

  const handleDeleteProduct = async (productId) => {
    const confirmation = confirm(
      `Are you sure you want to delete ${selectedProductIds.length} this product?`
    );

    if (!confirmation) return;

    //() => axiosInstance.delete(`/products/${singleId}`) this will execute when try catch
    const deletePromisesArray = selectedProductIds.map(
      (singleId) => () => axiosInstance.delete(`/products/${singleId}`)
    );

    console.log(deletePromisesArray);

    // return;
    try {
      await Promise.all(deletePromisesArray.map((single) => single()));
      searchParams.set("halaman", Number(1));
      setSearchParams(searchParams);
      setSelectedProductIds([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // console.log("di useEffect jalan");
    if (!searchParams.get("halaman")) {
      searchParams.set("halaman", 1);
      setSearchParams(searchParams);
    }
    fetchProducts();
  }, [searchParams.get("halaman"), searchParams.get("search")]);

  return (
    <>
      {/* {console.log(products)}
      {console.log("di return jsx jalan")} */}
      <AdminLayout
        title="Products Management"
        description="Manage our products"
        rightSection={
          <div className="flex gap-2">
            {selectedProductIds.length ? (
              <Button onClick={handleDeleteProduct} variant="destructive">
                Delete {selectedProductIds.length} Products
              </Button>
            ) : null}

            <Link to={"/admin/products/create"}>
              <Button>
                <IoAdd className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>
        }
      >
        <div className="mb-6 ">
          <div className="flex gap-5 justify-center">
            <Input
              className="max-w-[400px]"
              placeholder="Search Products name ..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Button onClick={searchProduct}>search</Button>
          </div>
        </div>
        <Table className="p-2 border border-collapse rounded-md">
          {/* {console.log("inside table jalan")}
          {console.log(products)} */}
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
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
                  <TableCell>
                    <Checkbox
                      onCheckedChange={(checked) =>
                        handleOnCheckedProduct(id, checked)
                      }
                      checked={selectedProductIds.includes(id)}
                    />
                  </TableCell>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{stock}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link to={`/admin/products/edit/${id}`}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-green-500"
                        >
                          <Edit3Icon className="w-4 h-4" />
                        </Button>
                      </Link>
                      {/* <Button
                        onClick={() => handleDeleteProduct(id)}
                        variant="ghost"
                        size="icon"
                        className="hover:text-red-700"
                      >
                        <Trash className="w-4 h-4" />
                      </Button> */}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Pagination className={"mt-8"}>
          <PaginationContent>
            <PaginationItem>
              <Button
                disabled={searchParams.get("halaman") == 1}
                onClick={handlePreviousPage}
                variant="ghost"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem className="mx-8 font-semibold text-xs">
              Page {searchParams.get("halaman")}
            </PaginationItem>
            <PaginationItem>
              <Button
                disabled={!hasNextPage}
                onClick={handleNextPage}
                variant="ghost"
              >
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

//NOTE!!!!!!!
//why do we use useSearchParams?because it persist the state,so when we refresh, it will stay on the current page and it doenst reset state!!unlike useState,it will reset the state so it will come back to initial state!!
