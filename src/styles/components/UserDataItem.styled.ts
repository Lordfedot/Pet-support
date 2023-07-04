import styled from "styled-components";
import device from "../../helpers/devices";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
type Prop = {
  isEditing?: boolean;
};

export const AiOutlineCheckStyled = styled(AiOutlineCheck)`
  width: 100%;
  height: 100%;
`;

export const BsPencilStyled = styled(BsPencil)`
  width: 100%;
  height: 100%;
`;

export const DataItem = styled.li`
  font-size: 12px;
  line-height: 16px;
  max-height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const UserDataInput = styled.input`
  width: 100%;
  border: none;
  padding: 4px 18px;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.bg};
  
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
export const InputWrapper = styled.div`
  gap: 7px;
  display: flex;
  align-items: center;
  width: 75%;
`;

export const UserDataText = styled.p`
  width: 100%;
  padding: 4px 18px;
`;

export const CheckButton = styled.button<Prop>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 5px;
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media ${device.tablet} {
    padding: 8px;
    width: 32px;
    height: 32px;
  }
`;
export const PencilButton = styled(CheckButton)`
`;
