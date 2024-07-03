import { Box } from "./components/Box";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <main className=" min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a Trend with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Shope ecomm provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <ProductCard
            image="https://m.media-amazon.com/images/I/51ulmT3YUZL._AC_UY1000_.jpg"
            name="blue t-shirt"
            price={75}
            stock={0}
          />
          <ProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28Jszaym5PO0SynGkapNxDSvGTfFmHpv7kv74Es0oR5v6t151TJxT2mk6UBhu13hhtqw&usqp=CAU"
            name="black t-shirt"
            price={65}
            stock={3}
          />
          <ProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUk1P8ppG_wGRgiuVe8DnXG1iDhyokiZQzdg&s"
            name="red t-shirt"
            price={55}
            stock={3}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
