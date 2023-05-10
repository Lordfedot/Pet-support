
import styled, { css } from "styled-components";
const fontStyles = css`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.07em;
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
