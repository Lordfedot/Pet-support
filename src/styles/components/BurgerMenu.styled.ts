import styled from "styled-components";

export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BurgerLayout = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  padding: 24px 32px;
  width: 100%;
  height: 100%;

  background-color: ${({theme}) => theme.colors.bg};
`;


export const BurgerCloseButton = styled.button`
cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
`;


