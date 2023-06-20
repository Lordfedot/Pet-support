import styled from "styled-components";
import device from "../../helpers/devices";
import { IoLogOutOutline } from "react-icons/io5";
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
  padding: 10px;

  margin-left: auto;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    border-radius: 20px;
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;

export const IoLogOutOutlineStyled = styled(IoLogOutOutline)`
  color: ${({ theme }) => theme.colors.primary};
  width: 18px;
  height: 18px;
`;
