
import { NavigationList,NavigationItem,StyledNavLink } from "../styles/components/Nav.styled";

const Nav = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationItem>
          <StyledNavLink to={"/news"}>News</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to={"/notices"}>Find pet</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to={"/friends"}>Our friends</StyledNavLink>
        </NavigationItem>
      </NavigationList>
    </nav>
  );
};

export default Nav;
