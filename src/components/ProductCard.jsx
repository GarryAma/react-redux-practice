import React from "react";

export const ProductCard = () => {
  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-md">
        <img
          className="w-full"
          src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/fdcf591cc8bb49df622e0a0198e61233c7005de3_xxl-1.jpg"
          alt=" product"
        />
      </div>
      <div>
        <p className="text-md">Dark blue t-shirt</p>
        <p className="text-xl font-semibold">100 AUD</p>
        <p className="text-muted-foreground">In-stock:10</p>
      </div>
    </div>
  );
};
