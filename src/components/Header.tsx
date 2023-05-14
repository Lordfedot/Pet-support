import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";
import {
  BoxHeader,
  BurgerButton,
  GiHamburgerMenuStyled,
} from "../styles/components/Header.styled";
import { Desktop, Mobile, Tablet } from "../helpers/mediaQuery";
const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  return (
    <BoxHeader>
      <Logo />
      <Desktop>
        <Nav />
      </Desktop>

      <Mobile>
        <BurgerButton  onClick={() => setBurgerShow(true)} type="button">
          <GiHamburgerMenuStyled />
        </BurgerButton>
        {burgerShow && (
          <BurgerMenu burgerShow={burgerShow} setBurgerShow={setBurgerShow}>
            <Nav />
          </BurgerMenu>
        )}
      </Mobile>
    </BoxHeader>
  );
};

export default Header;
