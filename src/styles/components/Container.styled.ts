import styled from "styled-components";
import device from "../../helpers/devices";
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

export const ContainerForm = styled(Container)`
  @media ${device.tablet} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const UserPageContainer = styled(Container)`
  @media ${device.tablet} {
    padding-left: 0;
  }
  @media ${device.desktop}{
    display: flex;
    gap: 32px;
  }
`;
