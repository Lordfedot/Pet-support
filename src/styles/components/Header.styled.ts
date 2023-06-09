import styled from "styled-components";
import device from "../../helpers/devices";
import { GiHamburgerMenu } from "react-icons/gi";

export const TabletWrapper = styled.div`
  display: flex;
  gap: 25px;
`;
export const BoxHeader = styled.header`
  display: flex;
  align-items: center;
  padding-top: 16px;
  justify-content: space-between;
  height: 10vh;

  @media ${device.tablet} {
    padding-top: 26px;
  }
  @media ${device.desktop} {
    padding-top: 20px;
    gap: 80px;
  }
`;

export const GiHamburgerMenuStyled = styled(GiHamburgerMenu)`
  width: 30px;
  height: 20px;
`;
export const BurgerButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
