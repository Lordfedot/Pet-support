import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";
import {
  BoxHeader,
  BurgerButton,
  GiHamburgerMenuStyled,
  TabletWrapper,
} from "../styles/components/Header.styled";
import { Desktop, Mobile, Tablet } from "../helpers/mediaQuery";
import AuthNav from "./AuthNav";
const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  return (
    <BoxHeader>
      <Logo />

      <Desktop>
        <Nav />
        <AuthNav />
      </Desktop>

      <Tablet>
        <TabletWrapper>
          <AuthNav />
          <BurgerButton onClick={() => setBurgerShow(true)} type="button">
            <GiHamburgerMenuStyled />
          </BurgerButton>
          {burgerShow && (
            <BurgerMenu burgerShow={burgerShow} setBurgerShow={setBurgerShow}>
              <Nav />
            </BurgerMenu>
          )}
        </TabletWrapper>
      </Tablet>

      <Mobile>
        <BurgerButton onClick={() => setBurgerShow(true)} type="button">
          <GiHamburgerMenuStyled />
        </BurgerButton>
        {burgerShow && (
          <BurgerMenu burgerShow={burgerShow} setBurgerShow={setBurgerShow}>
            <AuthNav />
            <Nav />
          </BurgerMenu>
        )}
      </Mobile>
      
    </BoxHeader>
  );
};

export default Header;
