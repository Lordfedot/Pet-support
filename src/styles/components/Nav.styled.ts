import styled from "styled-components";
import device from "../../components/helpers/devices";
export const NavigationList = styled.ul`
  display: none;
  @media ${device.desktop} {
    display: flex;
    gap: 80px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigationItem = styled.li`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
