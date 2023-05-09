import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import GlobalStyles from "./styles/global";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));
const OurFriensPage = lazy(() => import("./pages/OurFriensPage"));
const NewsPage = lazy(() => import("./pages/NewPage"));
const UserPage = lazy(() => import("./pages/UserPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/notices" element={<NoticesPage />}></Route>
          <Route path="/friends" element={<OurFriensPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Route>
      </Routes>
      <GlobalStyles/>
    </>
  );
};

export default App;
