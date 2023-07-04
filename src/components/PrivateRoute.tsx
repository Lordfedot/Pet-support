import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/selector";
interface RestrictedRouteProps {
  element: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute = ({
  element: Element,
  redirectTo = "/",
}: RestrictedRouteProps) => {
  const { isAuthenticated,isRefreshing } = useAppSelector((state) => state.auth);
  const shouldRedirect = !isRefreshing && !isAuthenticated;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{Element}</>;
};

export default PrivateRoute