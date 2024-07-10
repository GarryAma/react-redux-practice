import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import { axiosInstance } from "@/lib/axios";
import { Button } from "../ui/button";
import { Spinner } from "../Spinner";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  // fetch products data once when home page is first mounted
  useEffect(() => {
    fetchProducts();
    // console.log("useEffect runs");
  }, []);

  const fetchProducts = async () => {
    setIsloading(true);
    try {
      const fetched = await axiosInstance.get("/products");
      console.log(fetched.data);
      setProducts(fetched.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsloading(false);
    }
  };

  //array of jsx -> array contains jsx's/components, if rendered, the "[" and "]" isnt included/gone
  const arrayOfJsx = products.map((singleData) => (
    <ProductCard
      id={singleData.id}
      image={singleData.image}
      name={singleData.name}
      price={singleData.price}
      stock={singleData.stock}
    />
  ));

  // console.log("inside component runs");

  return (
    <>
      {/* <Header /> */}
      <main className=" min-h-[90vh]  max-w-screen-md mx-auto px-4 mt-8 ">
        <div className="pb-20 mx-auto text-center flex flex-col items center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a Trend with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Shope ecomm provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
            {arrayOfJsx}
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
};
