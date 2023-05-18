import styled from "styled-components";

export const DataItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserDataInput = styled.input`
  width: 100%;
  border: none;
  padding: 4px 18px;
  border-radius: ${({ theme }) => theme.radius};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
export const InputWrapper = styled.div`
  gap: 7px;
  display: flex;
  width: 75%;
`;

export const UserDataText = styled.p`
  width: 100%;

  padding: 4px 18px;
`;
