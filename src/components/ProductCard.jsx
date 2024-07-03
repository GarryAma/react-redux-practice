import React from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const ProductCard = ({ image, name, price, stock }) => {
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
          <Button size="icon" variant="outline">
            <IoIosRemove className="h-6 w-6" />
          </Button>
          <p className="font-bold text-lg">0</p>
          <Button size="icon" variant="outline">
            <IoIosAdd className="h-6 w-6" />
          </Button>
        </div>

        {/* button ad to cart */}
        <div>
          <Button className="w-full">add to cart</Button>
        </div>
      </div>
    </div>
  );
};
