
import { Field } from "formik";
import styled from "styled-components";
import device from "../../../helpers/devices";



export const AddNoticeTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.36;
  text-align: center;
  padding-bottom: 20px;
  width: 100%;
  @media ${device.tablet} {
    width: 448px;
  }
  @media ${device.desktop} {
    width: 448px;
  }
`;

export const AddNoticeIntro = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  text-align: center;
  letter-spacing: -0.01em;
  text-align: center;
  width: 100%;
  padding-bottom: 28px;
  @media ${device.tablet} {
    font-size: 20px;
    width: 448px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    width: 448px;
  }
`;

export const FieldsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-bottom: 40px;
`;

export const VisualyHiddenRadio = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const CategoryLabel = styled.label`
  border-radius: 40px;
  border: 1px solid #f59256;
  padding: 10px 28px;
  font-size: 14px;
  line-height: 1.34;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const CategoryLabelActive = styled.label`
  border-radius: 40px;
  border: transparent;
  background-color: #f59256;
  padding: 10px 28px;
  font-size: 14px;
  line-height: 1.34;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const CategoryRadioList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SexRadioList = styled(Field)`
  display: flex;
  gap: 80px;
`;

export const SexLable = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SexTextContentActive = styled.span`
  color: #f59256;
`;

export const AddNoticeInput = styled(Field)`
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media ${device.tablet} {
    width: 448px;
  }
  padding: 11px 16px;
`;

export const AddNoticeArea = styled.textarea`
  height: 190px;
  resize: none;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media ${device.tablet} {
    width: 448px;
  }
  padding: 16px;
`;


export const AddNoticeButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.34;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const AddNoticeButtonLi = styled.li`
  width: 100%;
  @media ${device.tablet} {
    width: auto;
  }
  @media ${device.desktop} {
    width: auto;
  }
`;