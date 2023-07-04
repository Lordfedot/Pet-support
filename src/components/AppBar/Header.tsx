import { useState, useEffect } from "react";
import Logo from "../Logo";
import Nav from "./Nav";
import BurgerMenu from "../BurgerMenu";
import {
  BoxHeader,
  BurgerButton,
  GiHamburgerMenuStyled,
  TabletWrapper,
} from "../../styles/components/Header.styled";
import { Desktop, Mobile, Tablet } from "../../helpers/mediaQuery";

import AuthNav from "./AuthNav";
import UserNav from "./UserNav";
import { Container } from "../../styles/components/Container.styled";
import { useAppSelector } from "../../redux/selector";

const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  useEffect(() => {
    document.body.style.overflow = burgerShow ? "hidden" : "unset";
  }, [burgerShow]);
  return (
    <Container>
      <BoxHeader>
        <Logo />

        <Desktop>
          <Nav />
          {isAuthenticated ? <UserNav /> : <AuthNav />}
        </Desktop>

        <Tablet>
          <TabletWrapper>
            {isAuthenticated ? <UserNav /> : <AuthNav />}
            <BurgerButton onClick={() => setBurgerShow(true)} type="button">
              <GiHamburgerMenuStyled />
            </BurgerButton>
            <BurgerMenu burgerShow={burgerShow} setBurgerShow={setBurgerShow}>
              <Nav />
            </BurgerMenu>
          </TabletWrapper>
        </Tablet>

        <Mobile>
          <BurgerButton onClick={() => setBurgerShow(true)} type="button">
            <GiHamburgerMenuStyled />
          </BurgerButton>

          <BurgerMenu burgerShow={burgerShow} setBurgerShow={setBurgerShow}>
            {isAuthenticated ? <UserNav /> : <AuthNav />}
            <Nav />
          </BurgerMenu>
        </Mobile>
      </BoxHeader>
    </Container>
  );
};

export default Header;
