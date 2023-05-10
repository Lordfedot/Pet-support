import styled from "styled-components";
import { Input } from "./Input.styled";
import device from "../../helpers/devices";


export const SearchNoticesWrapper = styled.div`
  position: relative;
  max-width: 608px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  @media ${device.tablet} {
    margin-top: 40px;
  }
  .cross {
    display: none;
  }
  :focus-within .search {
    display: none;
  }
  :focus-within input {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
  :focus-within .cross {
    display: block;
  }
`;
export const SearchNoticesInput = styled(Input)`
  border: none;
  outline: none;
  width: 100%;
`;

export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 8px;
  right: 12px;
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


