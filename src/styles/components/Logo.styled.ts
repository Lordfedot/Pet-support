import styled, { css } from "styled-components";
import device from "../../helpers/devices";
import { Link } from "react-router-dom";
const fontStyles = css`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 28px;
  line-height: 42px;
  @media ${device.tablet} {
    font-size: 32px;
    line-height: 48px;
  }
  letter-spacing: 0.07em;
`;

export const StyledLink = styled(Link)`
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const FirstColor = styled.p`
  display: inline;
  color: ${({ theme }) => theme.colors.primary};
  ${fontStyles}
`;
export const SecondColor = styled.span`
  color: ${({ theme }) => theme.colors.text};
  ${fontStyles}
`;
