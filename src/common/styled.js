import styled from 'styled-components';

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
  background-color: #25c898;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #82e8ca;
  }
  &:hover {
    background-color: #82e8ca;
  }
  &:focus {
    background-color: #059c6f;
    outline: none;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 15px;
  top: 13px;
  width: 15px;
  height: 15px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 8px;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
