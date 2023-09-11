import styled from 'styled-components'

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #f1f1f1;

  &:hover {
    background-color: lightgrey; 
}
`;