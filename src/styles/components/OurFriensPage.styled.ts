import styled from "styled-components";
import device from "../../helpers/devices";

export const ServicesList = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 28px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    gap: 32px;
    margin-top: 40px;
  }
  @media ${device.desktop} {
    margin-top: 60px;
  }
`;

