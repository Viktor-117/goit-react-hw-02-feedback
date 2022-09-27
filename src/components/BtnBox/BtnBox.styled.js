import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  padding: 4px 8px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  cursor: pointer;

  :not(:first-of-type) {
    margin-left: 8px;
  }
`;
