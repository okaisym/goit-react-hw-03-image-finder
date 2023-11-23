import styled from '@emotion/styled';


export const Img = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease; 
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
