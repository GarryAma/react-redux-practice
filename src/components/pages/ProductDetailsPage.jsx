import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

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
  return (
    <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-8">
        <img src={dummy.image} alt={dummy.name} className="w-full border" />
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="text-xl">{dummy.name}</h1>
          <h3 className="text-3xl font-bold">AUD {dummy.price}</h3>
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
    </main>
  );
};
