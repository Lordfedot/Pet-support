import styled from "styled-components";
import { Input } from "./Input.styled";
import { Button } from "./Button.styled";
import { AiOutlinePlus } from "react-icons/ai";
export const AddPetModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  gap: 40px;
`;

export const AddPetModalTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
`;
export const AddPetModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const AddPetModalLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 18px;
  line-height: 26px;
`;

export const AddPetModalInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);

  padding: 11px 16px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddPetModalFile = styled.input`
  display: none;
`;
export const AddPetModalFileLabel = styled.label`
  cursor: pointer;
  display: block;
  width: 208px;
  height: 208px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 20px;
  
  align-self: center;

  position: relative;
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

export const AddPetModalFileTextArea = styled.textarea`
  resize: none;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${({ theme }) => theme.radius};
  padding: 9px 12px;

  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);

  padding: 11px 16px;
  min-height: 100px;
`;
