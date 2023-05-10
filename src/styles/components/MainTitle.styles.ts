import styled from "styled-components";
import device from "../../helpers/devices";

export const H1 = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  @media ${device.tablet} {
    font-size: 48px;
    line-height: 66px;
  }
`;
