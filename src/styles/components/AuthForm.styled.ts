import styled from "styled-components";
import device from "../../helpers/devices";
import { Button } from "./Button.styled";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Form } from "formik";
type Props = {
  isError: boolean;
  isValid: boolean;
};

const getBorderColor = (isError: boolean, isValid: boolean) => {
  if (isValid) {
    return "red";
  } else if (isError) {
    return "green";
  } else {
    return "rgba(245, 146, 86, 0.5)";
  }
};
export const FormStyled = styled(Form)`
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.tablet} {
    max-width: 608px;
    background-color: white;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding: 60px;
  }
`;

export const AiFillCheckCircleStyled = styled(AiFillCheckCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  color: green;
`;

export const RxCrossCircledStyled = styled(RxCrossCircled)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  color: red;
`;
export const FormList = styled.ul`
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FormItem = styled.li`
  position: relative;
`;

export const FormInput = styled.input<Props>`
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${({ theme }) => theme.radius};
  padding: 9px 12px;

  background-color: transparent;
  border: 1px solid
    ${({ isValid, isError }) => getBorderColor(isValid, isError)};
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const FormButton = styled(Button)`
  cursor: pointer;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    pointer-events: none;
  }
`;

export const FormText = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 16px;
  p {
    color: rgba(17, 17, 17, 0.6);
  }
  a {
    color: #3091eb;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -17px;
  left: 20px;
  font-size: 14px;
  line-height: 19px;

  color: #e2001a;
`;

export const ValidMessage = styled(ErrorMessage)`
  color: green;
`;
