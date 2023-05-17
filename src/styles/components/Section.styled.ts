import styled from "styled-components";
import device from "../../helpers/devices";
export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;
  @media ${device.tablet} {
    padding-top: 90px;
  }
  @media ${device.desktop} {
    padding-top: 70px;
    padding-bottom: 200px;
  }
`;

export const SectionForm = styled(Section)`
  
`
