import { FirstColor, SecondColor,StyledLink } from "../styles/components/Logo.styled";

const Logo = () => {
  return (
    <StyledLink to={"/"}>
      <FirstColor>
        pet<SecondColor>l</SecondColor>y
      </FirstColor>
    </StyledLink>
  );
};

export default Logo;
