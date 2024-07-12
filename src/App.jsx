import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartPage } from "./components/pages/CartPage";
import { HomePage } from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { LoginPage } from "./components/pages/LoginPage";
import { LoginPageReactHookForm } from "./components/pages/LoginPageReactHookForm";
import { ProductDetailsPage } from "./components/pages/ProductDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPageReactHookForm />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
