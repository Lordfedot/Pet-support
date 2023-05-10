import { FC } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { BoxHeader } from "../styles/components/Header.styled";
const Header: FC = () => {
  return (
    <BoxHeader>
      <Logo/>
      <Nav/>
    </BoxHeader>
  );
};

export default Header;
