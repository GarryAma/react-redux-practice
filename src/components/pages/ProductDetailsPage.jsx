import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { Skeleton } from "../ui/skeleton";
// import { Spinner } from "../Spinner";

// steps:
// get the id(productId) first ✅
// fetch product which has that id ✅
// set data product to state ✅
// display that product(state) ✅

const ProductDetailSkeleton = () => {
  return (
    <main className="min-h-[85vh] max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-8">
        <Skeleton className="w-full h-[423.5px] border" />
        <div className="flex flex-col gap-1 justify-center">
          <Skeleton className="w-[421px] h-[28px]" />
          <Skeleton className="w-[421px] h-[36px]" />
          <Skeleton className="w-[421px] h-[60px] mt-4" />

          <div className="flex items-center gap-4 mt-6">
            {/* <Button onClick={() => {}} size="icon" variant="outline"> */}
            <Skeleton className="w-[40px] h-[40px]" />
            {/* </Button> */}
            <Skeleton className="w-[12px] h-[28px]" />{" "}
            {/* <Button onClick={() => {}} size="icon" variant="outline"> */}
            <Skeleton className="w-[40px] h-[40px]" />
            {/* </Button> */}
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Skeleton className="w-[370px] h-[44px]" />
            <Skeleton className="w-[35px] h-[40px]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  //   console.log(productId);

  const fetchedProductById = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      const response2 = await axiosInstance.get(`/products/3`);
      console.log(response2.data);
      //   console.log(response.≈data);
      setProduct(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedProductById();
  }, []);

  //   console.log(product);
  return (
    <main className="min-h-[85vh] max-w-screen-lg mx-auto px-4 mt-8">
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <div className="grid sm:grid-cols-2 grid-rows-2 gap-8">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full border"
          />
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-xl">{product?.name}</h1>
            <h3 className="text-3xl font-bold">AUD {product?.price}</h3>
            <p className="text-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              vitae doloribus mollitia aut quaerat. Vel inventore quam sequi
              tenetur impedit.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Button onClick={() => {}} size="icon" variant="outline">
                <IoIosRemove className="h-6 w-6" />
              </Button>
              <p className="font-bold text-lg">{quantity}</p>
              <Button onClick={() => {}} size="icon" variant="outline">
                <IoIosAdd className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center mt-8 gap-4">
              <Button className="w-full" size="lg">
                Add to cart
              </Button>
              <Button size="icon" variant="ghost">
                <IoHeartOutline className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
