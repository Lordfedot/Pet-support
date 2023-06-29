import styled from "styled-components";
import { Icon } from "../../../components/svgIcon";
import device from "../../../helpers/devices";

export const NoticeByIdContainer = styled.div`
  width: 100%;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
`;

export const NoticeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  margin-bottom: 28px;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const NoticeByIdCategory = styled.p`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  padding: 6px 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 0 40px 40px 0;

  text-transform: capitalize;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const NoticeByIdAvatar = styled.img`
  display: block;
  width: 288px;
  height: 328px;
  border-radius: 0px 0px 40px 40px;
`;

export const NoticeByIdTitle = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  text-transform: capitalize;
`;

export const NoticeByIdDescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NoticeByIdDescriptionListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  display: flex;
`;

export const NoticeByIdDescriptionData = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
`;

export const NoticeByIdFieldDescription = styled.span`
  display: block;
  width: 70px;
  margin-right: 50px;
`;

export const NoticeByIdContacts = styled.a`
  text-decoration: underline;
  color: #f59256;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
`;

export const NoticeByIdComents = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

export const NoticeByIdComentsData = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const NoticeByIdButtonsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding-right: 20px;
  @media ${device.tablet} {
    flex-direction: row;
    align-self: flex-end;
  }
  @media ${device.desktop} {
    flex-direction: row;
    align-self: flex-end;
  }
`;
export const NoticeByIdAddToButton = styled.button`
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  width: 100%;
  padding: 9px 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  @media ${device.tablet} {
    width: 160px;
  }
  @media ${device.desktop} {
    width: 160px;
  }
  :hover {
    background-color: #f59256;
    color: #fff;
  }
  :focus {
    background-color: #f59256;
    color: #fff;
  }
`;
export const NoticeByIdContactButton = styled.a`
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  width: 100%;
  display: block;
  padding: 9px 0;

  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    width: 160px;
  }
  @media ${device.desktop} {
    width: 160px;
  }

  :hover {
    background-color: #f59256;
    color: #fff;
    fill: #fff;
  }
  :focus {
    background-color: #f59256;
    color: #fff;
    fill: #fff;
  }
`;

export const IconDelete = styled(Icon)`
  fill: #f59256;
`;