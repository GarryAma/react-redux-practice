import React from "react";
import { ProductCard } from "../ProductCard";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const HomePage = () => {
  const data = [
    {
      image: "https://m.media-amazon.com/images/I/51ulmT3YUZL._AC_UY1000_.jpg",
      name: "blue t-shirt",
      price: 75,
      stock: 10,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpiqlPwMHWran3BK5ddkXf1JgPTKAJ-vP-K2Hp6vdk97krJjOXMgP7pn3C4j79b8yrhwqW9FPqaJBlCSB5q7QSba2JIPB1lme6DWrfWSp4v1UwChJdC1mpIg&usqp=CAE",
      name: "gray t-shirt",
      price: 65,
      stock: 7,
    },
    {
      image:
        "https://prd-static.sf-cdn.com/resources/images/store/2015/global/1140x1140/ANZ/Photo-Gifts/tshirts-kids-white-donut-1140x1140.jpg",
      name: "white donuts t-shirt",
      price: 55,
      stock: 0,
    },
  ];
  const arrayOfJsx = data.map((singleData) => (
    <ProductCard
      image={singleData.image}
      name={singleData.name}
      price={singleData.price}
      stock={singleData.stock}
    />
  ));
  return (
    <>
      {/* <Header /> */}
      <main className=" min-h-[90vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a Trend with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Shope ecomm provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
          {arrayOfJsx}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};
