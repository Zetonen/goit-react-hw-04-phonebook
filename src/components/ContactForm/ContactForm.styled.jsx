import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #000000;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 20px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms, background-color 300ms, box-shadow 300ms;

  &:hover{
    color: #000000;
    background-color: #d5d5d5;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  }
`;