import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { Spinner } from "../Spinner";

const dummy = {
  id: 20,
  image:
    "https://teamkingies.com.au/cdn/shop/files/Cleats.jpg?v=1710138554&width=1445",
  name: "Stainless Steel Cleats",
  price: 99.99,
  stock: 12,
  theme: "Fishing Cleats",
};

export const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  const fetchedProductById = async () => {
    setIsLoading(true);
    try {
      const fetchedAllProduct = await axiosInstance.get("/products");
      //   console.log(fetchedAllProduct.data);
      const productById = fetchedAllProduct.data.filter(
        (singleProduct) => singleProduct.id === +productId
      );
      setProduct(productById);
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
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 gap-8">
          <img
            src={product[0]?.image}
            alt={product[0]?.name}
            className="w-full border"
          />
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-xl">{product[0]?.name}</h1>
            <h3 className="text-3xl font-bold">AUD {product[0]?.price}</h3>
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
