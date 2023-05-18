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
import UserNav from "./UserNav";
import { Container } from "../styles/components/Container.styled";
import { useAppSelector } from "../redux/selector";

const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  

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
    </Container>
  );
};

export default Header;
