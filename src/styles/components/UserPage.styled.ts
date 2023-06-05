import styled from "styled-components";
import device from "../../helpers/devices";
import { MdAddAPhoto } from "react-icons/md";
export const UserDataWrapper = styled.div`
  padding: 20px 16px;
  background-color: white;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media ${device.tablet} {
    position: relative;
    display: flex;
    gap: 52px;
    flex-direction: row-reverse;
    border-radius: 0px 20px 20px 0px;
  }
  @media ${device.desktop}{
    display: block;
    max-height: 560px;
    width: 35%;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DataImg = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
`;
export const EditPhoto = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  align-self: flex-end;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.colors.text};
`;

export const MdAddAPhotoStyled = styled(MdAddAPhoto)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const UserDataList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 45px;

  @media ${device.tablet} {
    width: 100%;
  }
  
`;
