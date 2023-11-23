import styled from '@emotion/styled';

export const InputContainer = styled.div`
  position: relative;
  width: 300px; 
`;

export const Input = styled.input`
  padding: 8px 8px 8px 40px;
  width: 300px;
  outline: none;
  border: none;
  border-radius: 2px;
`;

export const SearchBtn = styled.button`
  color: #6F00FF;
  background-color: transparent;
  border: none;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
