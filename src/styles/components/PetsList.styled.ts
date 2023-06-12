import styled from "styled-components";
import device from "../../helpers/devices";
export const PetsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PetsItem = styled.li`
  background-color: white;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  padding: 20px;

  @media ${device.tablet} {
    display: flex;
    gap: 32px;
  }
`;

export const PetImg = styled.img`
  width: 100%;
  max-width: 240px;
  height: 240px;

  border-radius: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    margin: 0;
    max-width: 161px;
    height: 161px;
  }
`;

export const PetsInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const PetsInfoItem = styled.li`
  p {
    word-wrap: break-word;
  }
  font-size: 14px;
  line-height: 22px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;
