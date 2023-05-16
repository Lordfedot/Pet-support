import styled from "styled-components";
import img from "../../images/Waves.png";
import dogImg from "../../images/dog.png";
import device from "../../helpers/devices";
export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  @media ${device.tablet} {
    font-size: 68px;
    line-height: 100px;
  }
  @media ${device.desktop} {
    max-height: 768px;
    max-width: 700px;
  }
`;

export const HomeSection = styled.section`
  padding-top: 60px;
`;

export const HomeContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const WavesBG = styled.div`
  overflow: hidden;
  height: 90vh;
  max-height: 601px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 100px;

  @media ${device.tablet} {
    max-height: 1193px;
  }
  @media ${device.desktop} {
    max-height: 768px;
  }
`;

export const DogBG = styled.div`
  overflow: hidden;
  height: 90vh;
  max-height: 601px;
  background-image: url(${dogImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 200px;

  @media ${device.tablet} {
    max-height: 1193px;
    background-position: 50% 30vh;
  }
  @media ${device.desktop} {
    background-size: contain;
    background-position: right;
    max-height: 768px;
  }
`;
