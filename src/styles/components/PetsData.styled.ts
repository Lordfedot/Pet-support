import styled from "styled-components";
import device from "../../helpers/devices";
import { AiOutlinePlus } from "react-icons/ai";

export const PetsWrapper = styled.div`
  @media ${device.tablet} {
    padding-left: 32px;
  }
  @media ${device.desktop} {
    padding: 0;
    width: 65%;
  }
`;
export const PetsDataWrapper = styled.div`
  margin-top: 26px;
  margin-bottom: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AddPetButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AddPetButton = styled.button`
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  border-radius: 50%;
  border: none;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  color: white;
  width: 16px;
  height: 16px;
  @media ${device.tablet} {
  }
`;
