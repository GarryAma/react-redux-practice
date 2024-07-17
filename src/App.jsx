import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartPage } from "./components/pages/CartPage";
import { HomePage } from "./components/pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { LoginPage } from "./components/pages/LoginPage";
import { LoginPageReactHookForm } from "./components/pages/LoginPageReactHookForm";
import { ProductDetailsPage } from "./components/pages/ProductDetailsPage";
import { ProductManagementPage } from "./components/pages/admin/ProductManagementPage";
import { CreateProductPage } from "./components/pages/admin/CreateProductPage";
import { ToastProvider } from "./components/ui/toast";

function App() {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <ToastProvider>
      <>
        {!pathname.startsWith("/admin") ? <Header /> : null}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPageReactHookForm />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/admin">
            <Route path="products" element={<ProductManagementPage />} />
            <Route path="products/create" element={<CreateProductPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {!pathname.startsWith("/admin") ? <Footer /> : null}
      </>
    </ToastProvider>
  );
}

export default App;
