import styled from "styled-components";

type Prop = {
  burgerShow: boolean;
};
export const BurgerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BurgerLayout = styled.div<Prop>`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  transition: all 0.5s ease;
  transform: ${({ burgerShow }) =>
    burgerShow ? "translate(0%,0%)" : "translate(100%,0%)"};
  /* opacity: ${({ burgerShow }) => (burgerShow ? 1 : 0)}; */
  padding: 24px 32px;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.bg};
`;

export const BurgerCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
`;
