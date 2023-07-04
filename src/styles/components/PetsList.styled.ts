import styled from "styled-components";
import device from "../../helpers/devices";
import { MdDelete } from "react-icons/md";
export const PetsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PetsItem = styled.li`
  position: relative;
  background-color: white;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.02);
  }

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
export const MdDeleteStyled = styled(MdDelete)`
  color: inherit;
  width: 20px;
  height: 20px;
`;
export const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  padding: 12px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bg};
  color: rgba(17, 17, 17, 0.6);
  outline: 1px solid ${({ theme }) => theme.colors.bg};

  transition: all 0.3s ease;
  &:hover,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
