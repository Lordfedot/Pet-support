import styled from "styled-components";
import device from "../../helpers/devices";
export const ModalBackdrop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 40px;
  background-color: white;
  padding: 20px;
  margin: auto;
  max-height: 100%;
  overflow: auto;
  @media ${device.tablet} {
    padding: 40px 80px;
  }
`;

export const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg};
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 111;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  padding: 12px;
`;
