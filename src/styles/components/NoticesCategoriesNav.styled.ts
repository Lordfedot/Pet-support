import styled from "styled-components";
import device from "../../helpers/devices";

export const NoticesNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 40px;

  .active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NoticesNavButton = styled.button`
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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
