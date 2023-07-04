import styled from "styled-components";
import device from "../../helpers/devices";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
export const NewsInput = styled.input`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  width: 100%;
  padding: 9px 12px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const NewsLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ::before {
    content: "";
    transition: all 0.4s ease;
    width: 100%;
    height: 6px;

    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;
  }
  &:hover::before {
    background: linear-gradient(240deg, #ff634e 0%, #ffdf48 105.44%);
  }
  @media ${device.tablet} {
    width: 336px;
  }
`;
export const NewsImg = styled.img`
  border-radius: 20px;
  width: 280px;
  height: 252px;

  margin-left: auto;
  margin-right: auto;
  @media ${device.tablet} {
    width: 336px;
    margin-left: none;
    margin-right: none;
  }
`;
export const NewsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
`;
export const NewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewsText = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
`;
export const NewsDate = styled.p`
  font-size: 16px;
  line-height: 22px;

  color: rgba(17, 17, 17, 0.6);
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 608px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 40px;
  @media ${device.tablet} {
    margin-top: 40px;
  }
`;
export const DeleteTextButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 14px;
  right: 14px;
  cursor: pointer;

  width: 15px;
  height: 15px;
  transition: all 0.3s ease;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    width: 17.49px;
    height: 17.49px;
  }
`;
export const AiOutlineSearchStyled = styled(AiOutlineSearch)`
  transition: all 0.3s ease;
  color: inherit;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const RxCrossCircledStyled = styled(RxCrossCircled)`
  transition: all 0.1s ease;
  pointer-events: none;
  color: inherit;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
