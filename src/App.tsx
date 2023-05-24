import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import GlobalStyles from "./styles/global";
import { useAppDispatch, useAppSelector } from "./redux/selector";
import { fetchCurrentUser } from "./redux/operation";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));
const OurFriensPage = lazy(() => import("./pages/OurFriensPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/notices" element={<NoticesPage />}></Route>
          <Route path="/friends" element={<OurFriensPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
