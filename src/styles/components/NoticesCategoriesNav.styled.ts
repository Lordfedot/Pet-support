import styled from "styled-components";

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

