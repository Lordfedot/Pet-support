import Header from "./Header";
import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
