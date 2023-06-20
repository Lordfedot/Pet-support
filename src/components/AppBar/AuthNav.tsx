
import {
  StyledLink,
  StyledRegistrationLink,
  AuthNavWrapper,
} from "../../styles/components/AuthNav.styled";
const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <li>
        <StyledLink to={"/login"}>Login</StyledLink>
      </li>
      <li>
        <StyledRegistrationLink to={"/register"}>
          Registration
        </StyledRegistrationLink>
      </li>
    </AuthNavWrapper>
  );
};

export default AuthNav;
