import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import device from "../../helpers/devices";
export const AddPetWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  p {
    font-size: 20px;
    line-height: 27px;
  }
`;
export const NoticesNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const AddPetButton = styled.button`
  color: ${({ theme }) => theme.colors.white};

  position: fixed;
  bottom: 50px;
  right: 40px;

  cursor: pointer;
  border-radius: 50%;
  border: none;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  @media ${device.tablet} {
    position: static;
  }
  &:hover,
  &focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`;

export const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  color: white;
  width: 21px;
  height: 21px;
  @media ${device.tablet} {
    width: 16px;
    height: 16px;
  }
`;
