
import Logo from "./Logo";
import Nav from "./Nav";
import { BoxHeader } from "../styles/components/Header.styled";
const Header = () => {
  return (
    <BoxHeader>
      <Logo/>
      <Nav/>
    </BoxHeader>
  );
};

export default Header;
