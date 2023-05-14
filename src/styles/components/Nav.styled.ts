import styled from "styled-components";
import device from "../../helpers/devices";
import { NavLink } from "react-router-dom";

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 88px;
  }
  @media ${device.desktop} {
    margin-top: 0;
    gap: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigationItem = styled.li`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.text};
  @media ${device.tablet} {
    font-size: 48px;
    line-height: 66px;
  }

  @media ${device.desktop} {
    font-size: 20px;
    line-height: 27px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }
`;
