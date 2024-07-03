import React from "react";

export const ProductCard = ({ image, name, price, stock }) => {
  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-md">
        <img className="w-full" src={image} alt=" product" />
      </div>
      <div>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">{price} AUD</p>
        <p className="text-muted-foreground">In-stock:{stock}</p>
      </div>
    </div>
  );
};
