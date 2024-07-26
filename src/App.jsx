import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartPage } from "./components/pages/CartPage";
import { HomePage } from "./components/pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { LoginPageReactHookForm } from "./components/pages/LoginPageReactHookForm";
import { ProductDetailsPage } from "./components/pages/ProductDetailsPage";
import { ProductManagementPage } from "./components/pages/admin/ProductManagementPage";
import { CreateProductPage } from "./components/pages/admin/CreateProductPage";
import { ToastProvider } from "./components/ui/toast";
import { EditProductPage } from "./components/pages/admin/EditProductPage";
import { CounterPage } from "./components/pages/CounterPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { Toaster } from "./components/ui/toaster";

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/admin">
            <Route path="products" element={<ProductManagementPage />} />
            <Route path="products/create" element={<CreateProductPage />} />
            <Route
              path="products/edit/:productId"
              element={<EditProductPage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {!pathname.startsWith("/admin") ? <Footer /> : null}
        <Toaster />
      </>
    </ToastProvider>
  );
}

export default App;
