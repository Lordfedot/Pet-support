import styled from "styled-components";
import device from "../../helpers/devices";
import { Link } from "react-router-dom";

export const AuthNavWrapper = styled.ul`
  margin-top: 46px;
  margin-bottom: 60px;
  display: flex;
  gap: 12px;
  justify-content: center;

  @media ${device.tablet} {
   margin: 0;
  }
`;
export const StyledLink = styled(Link)`
  padding: 10px 28px;
  cursor: pointer;

  font-size: 14px;
  line-height: 19px;

  letter-spacing: 0.04em;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
  }

  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const StyledRegistrationLink = styled(StyledLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
