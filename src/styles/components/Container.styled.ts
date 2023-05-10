import styled from "styled-components";
import device from "../../components/helpers/devices";
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;