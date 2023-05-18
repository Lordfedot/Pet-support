import styled from "styled-components";
import device from "../../helpers/devices";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const RiAccountCircleFillStyled = styled(RiAccountCircleFill)`
  fill: white;
  width: 23px;
  height: 23px;
`;

export const UserNavButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px 28px;
  cursor: pointer;

  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.04em;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
  }

  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
