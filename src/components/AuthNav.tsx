
import { Link } from "react-router-dom";
import { StyledLink,StyledRegistrationLink,AuthNavWrapper } from "../styles/components/AuthNav.styled";
const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledLink>
        <Link to={"/login"}>Login</Link>
      </StyledLink>
      <StyledRegistrationLink>
        <Link to={"/register"}>Registration</Link>
      </StyledRegistrationLink>
    </AuthNavWrapper>
  );
};

export default AuthNav;
