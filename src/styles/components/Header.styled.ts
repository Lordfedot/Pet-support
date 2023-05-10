import styled from "styled-components";
import device from "../../components/helpers/devices";
export const BoxHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 80px;
  padding-top: 16px;
  @media ${device.tablet} {
    padding-top: 26px;
  }
  @media ${device.desktop} {
    padding-top: 20px;
  }
`;
