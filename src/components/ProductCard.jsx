import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const ProductCard = ({ image, name, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
    return;
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
    return;
  };
  //-----------------------------------------------------------------
  // //DID MOUNT!!
  // useEffect(() => {
  //   alert("component did mount");
  // }, []);

  // //DID UPDATE together with MOUNT(default behavior)
  // useEffect(() => {
  //   alert("component did update");
  // }, [quantity]);

  // //DID UNMOUNT
  // useEffect(() => {
  //   return () => {
  //     alert("component unmount");
  //   };
  // }, []);
  //-----------------------------------------------------------------
  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-md">
        <img className="w-full" src={image} alt=" product" />
      </div>
      <div>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">
          {price.toLocaleString("id-AU")} AUD
        </p>
        <p className="text-muted-foreground">In-stock:{stock}</p>
      </div>
      <div className="flex flex-col gap-4">
        {/* button quantity */}
        <div className="flex justify-between items-center">
          <Button
            disabled={quantity <= 0}
            onClick={decreaseQuantity}
            size="icon"
            variant="outline"
          >
            <IoIosRemove className="h-6 w-6" />
          </Button>
          <p className="font-bold text-lg">{quantity}</p>
          <Button
            disabled={quantity >= stock}
            onClick={increaseQuantity}
            size="icon"
            variant="outline"
          >
            <IoIosAdd className="h-6 w-6" />
          </Button>
        </div>

        {/* button ad to cart */}
        <div>
          <Button
            onClick={() => setIsAdded((prev) => !prev)}
            className="w-full"
            disabled={!stock}
          >
            {stock > 0 ? "add to cart" : "out of stock"}
          </Button>
        </div>
      </div>
    </div>
  );
};
