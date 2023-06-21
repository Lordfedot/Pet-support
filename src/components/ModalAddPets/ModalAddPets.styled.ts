import styled from "styled-components";
import { Input } from "../../styles/components/Input.styled";
import { Button } from "../../styles/components/Button.styled";
import { AiOutlinePlus } from "react-icons/ai";
import device from "../../helpers/devices";
type Prop = {
  file?: boolean;
  isError?: boolean;
};
export const AddPetModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  gap: 40px;

  @media ${device.tablet} {
    max-width: 608px;
  }
`;

export const AddPetModalTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
`;
export const AddPetModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    position: relative;
  }
`;

export const AddPetModalLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 26px;
`;

export const AddPetModalInput = styled(Input)<Prop>`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 11px 16px;
  border: 1px solid
    ${({ isError }) => (isError ? "red" : "rgba(245, 146, 86, 0.5)")};
  transition: all 0.4s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    width: 448px;
  }
`;

export const AddPetModalButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const AddPetModalButton = styled(Button)`
  width: 100%;
`;

export const AddPetModalFileItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddPetModalFile = styled.input`
  display: none;
`;
export const AddPetModalFileLabel = styled.label<Prop>`
  cursor: pointer;
  display: block;
  width: 208px;
  height: 208px;
  border: 1px solid
    ${({ isError }) => (isError ? "red" : "rgba(245, 146, 86, 0.5)")};

  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 20px;

  align-self: center;

  position: relative;
  transition: all 0.4s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const AiOutlinePlusStyled = styled(AiOutlinePlus)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  color: rgba(17, 17, 17, 0.6);
`;

export const AddPetModalTextArea = styled.textarea<Prop>`
  resize: none;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${({ theme }) => theme.radius};
  padding: 9px 12px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid
    ${({ isError }) => (isError ? "red" : "rgba(245, 146, 86, 0.5)")};
  padding: 11px 16px;
  min-height: 100px;
  transition: all 0.4s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    width: 448px;
  }
`;

export const AddPetModalAvatar = styled.img`
  align-self: center;

  width: 208px;
  height: 208px;
  border-radius: 20px;
`;

export const AddPetModalError = styled.p<Prop>`
  position: absolute;
  bottom: -17px;
  left: ${({ file }) => (file ? "150px" : "20px")};
  font-size: 14px;
  line-height: 19px;
  color: #e2001a;

  opacity: ${({ isError }) => (isError ? 1 : 0)};
  transition: all 0.4s ease-in-out;
`;
