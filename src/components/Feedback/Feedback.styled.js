import styled from 'styled-components';

export const Button = styled.button`
  font-size: 20px;
  background-color: #ffcbe4;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  color: #ad4375;
  &:hover {
    background-color: #ed63a5;
    color: #ffffff;
  }
`;

export const List = styled.ul`
  display: flex;
  alight-items: center;
  gap: 30px;
`;
