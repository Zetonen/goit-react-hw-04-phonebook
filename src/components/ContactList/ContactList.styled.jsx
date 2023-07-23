import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(247, 246, 246, 0.6);
  border: 1px solid #000000;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;

  transition: color 300ms, background-color 300ms, box-shadow 300ms;

  &:hover {
    color: #000000;
    background-color: #d5d5d5;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
