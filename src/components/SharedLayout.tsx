import Header from "./Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
