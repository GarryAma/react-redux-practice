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
import { useDispatch } from "react-redux";
import { axiosInstance } from "./lib/axios";
import { useEffect, useState } from "react";
import { Spinner } from "./components/Spinner";

function App() {
  const { pathname } = useLocation();
  const [isHydrated, setIsHydrated] = useState(false);
  // console.log(pathname);
  // console.log("app printed");

  const dispatch = useDispatch();

  const hydrateAuth = async () => {
    console.log("hydrateAuth started");
    try {
      const currentUser = localStorage.getItem("current-user");

      if (!currentUser) return;

      // const userResponse = await axiosInstance.get(`/users?id=${currentUser}`); -->  sama as code below(params vs query),params will return object right away,query will return array of object
      const userResponse = await axiosInstance.get(`/users/${currentUser}`);

      dispatch({
        type: "USER_LOGGED_IN",
        payload: {
          username: userResponse.data.username,
          id: userResponse.data.id,
        },
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("hydrateAuth completed");
      setIsHydrated(true);
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    setIsHydrated(false);

    hydrateAuth();
  }, []);

  console.log("isHydrated", isHydrated);

  // if (!isHydrated) return <Spinner />;

  return (
    <>
      {console.log(isHydrated)}
      {isHydrated ? (
        <ToastProvider>
          <>
            {!pathname.startsWith("/admin") ? <Header /> : null}

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPageReactHookForm />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/counter" element={<CounterPage />} />
              <Route
                path="/products/:productId"
                element={<ProductDetailsPage />}
              />
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
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
