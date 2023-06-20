import styled from "styled-components";
import device from "../../helpers/devices";

export const ServicesItem = styled.li`
  width: 280px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    width: 336px;
    padding: 16px;
  }
  @media ${device.desktop} {
    width: 394px;
  }
`;

export const ServicesTitle = styled.a`
  margin-bottom: 12px;
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media ${device.tablet} {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 22px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: baseline;
`;

export const ServicesInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  @media ${device.tablet} {
    gap: 8px;
  }
  @media ${device.desktop} {
    gap: 12px;
  }
`;

export const ServicesInfoItem = styled.li`
  position: relative;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  line-height: 16px;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 19px;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ServicesStyledText = styled.p`
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ServicesStyledLink = styled.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  line-height: 16px;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 19px;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ServicesDropdown = styled.ul`
  position: absolute;
  background-color: white;
  padding: 12px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 10;

  li {
    display: flex;
    gap: 12px;
    justify-content: center;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ServiceImg = styled.img`
  width: 110px;
  height: 75px;
  @media ${device.tablet} {
    width: 120px;
    height: 85px;
  }
  @media ${device.desktop} {
    width: 158px;
    height: 112px;
  }
`;
