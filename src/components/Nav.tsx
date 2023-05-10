import { Link } from "react-router-dom";
import { NavigationList,NavigationItem } from "../styles/components/Nav.styled";
const Nav = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationItem>
          <Link to={"/news"}>News</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to={"/notices"}>Find pet</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to={"/friends"}>Our friends</Link>
        </NavigationItem>
      </NavigationList>
    </nav>
  );
};

export default Nav;
