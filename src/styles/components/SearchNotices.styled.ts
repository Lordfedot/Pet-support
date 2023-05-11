import styled from "styled-components";
import { Input } from "./Input.styled";
import device from "../../helpers/devices";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export const SearchNoticesWrapper = styled.div`
  position: relative;
  max-width: 608px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  @media ${device.tablet} {
    margin-top: 40px;
  }
`;
export const SearchNoticesInput = styled(Input)`
  font-size: 16px;
  line-height: 22px;

  padding-right: 34px;
  border: none;
  width: 100%;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
  }
  &:focus {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 14px;
  right: 14px;
  cursor: pointer;

  width: 15px;
  height: 15px;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    width: 17.49px;
    height: 17.49px;
  }
`;

export const AiOutlineSearchStyled = styled(AiOutlineSearch)`
  color: inherit;
  width: 100%;
  height: 100%;
`;
export const RxCrossCircledStyled = styled(RxCrossCircled)`
  pointer-events: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;
